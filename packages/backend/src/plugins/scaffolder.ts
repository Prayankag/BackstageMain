import { AzureRepoCreateAction } from '.scaffolder/custom-actions/azureRepoCreate'; // Adjust the path

export default async function createPlugin({ logger, config, database }) {
  const scaffolderRouter = await createRouter({
    actions: [
      ...getBuiltinActions(),
      AzureRepoCreateAction(), // Register the Azure repo creation action
    ],
    logger,
    config,
    database,
  });

  return scaffolderRouter;
}
