import { createTemplateAction } from '@backstage/plugin-scaffolder-backend';
import axios from 'axios';

export const AzureRepoCreateAction = () =>
  createTemplateAction<{
    organization: string;
    project: string;
    repositoryName: string;
    pat: string;
  }>({
    id: 'azure:repo:create',
    schema: {
      input: {
        type: 'object',
        required: ['organization', 'project', 'repositoryName', 'pat'],
        properties: {
          organization: {
            type: 'string',
            description: 'The Azure DevOps organization name.',
          },
          project: {
            type: 'string',
            description: 'The Azure DevOps project name.',
          },
          repositoryName: {
            type: 'string',
            description: 'The name of the repository to create.',
          },
          pat: {
            type: 'string',
            description: 'Personal Access Token for Azure DevOps authentication.',
          },
        },
      },
    },
    async handler(ctx) {
      const { organization, project, repositoryName, pat } = ctx.input;

      const url = `https://dev.azure.com/${organization}/${project}/_apis/git/repositories?api-version=7.1-preview.1`;
      const headers = {
        Authorization: `Basic ${Buffer.from(`:${pat}`).toString('base64')}`,
        'Content-Type': 'application/json',
      };
      const data = {
        name: repositoryName,
        project: {
          id: project,
        },
      };

      ctx.logger.info(`Creating repository: ${repositoryName} in project: ${project}`);
      try {
        const response = await axios.post(url, data, { headers });
        ctx.logger.info(`Repository created successfully: ${response.data.webUrl}`);
      } catch (error) {
        ctx.logger.error(`Failed to create repository: ${error.message}`);
        throw new Error(`Azure DevOps repository creation failed: ${error.message}`);
      }
    },
  });
