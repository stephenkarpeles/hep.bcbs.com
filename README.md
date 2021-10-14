**This repository holds the static content for the BCBS.com Blue Health Equity initiative.**

## 🚀 Tech Stack

- Gatsby v3+
- Algolia Instantsearch

## 💻 Local development

(TBD)

By default Gatsby will source data from the Drupal `stage` environment, which requires you to
be on the Oomph VPN or other whitelisted network. (If you are not on a whitelisted network you
will see HTTP 403 errors.) To configure Gatsby to use a local Drupal environment, create a file
called `.env.local` and add content similar to this:

```
DRUPAL_BASE_URL="https://bcbs.lndo.site/"
NODE_TLS_REJECT_UNAUTHORIZED=0
```

If you wish to use some other existing environment, you can either copy the appropriate `.env.*`
file to `.env.local` (e.g. copy `.env.dev` to `.env.local`) or you can run the Gatsby build
with a `DEPLOY_ENV` environment variable, e.g.:

```
DEPLOY_ENV=dev gatsby build
```

Note that the `.env.local` file is ignored by git and should not be committed.

## 💫 Deployments

[![Build and Deploy](https://github.com/BCBSADigital/hep.bcbs.com/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/BCBSADigital/hep.bcbs.com/actions/workflows/build-and-deploy.yml)

This project uses [GitHub Actions](https://github.com/BCBSADigital/hep.bcbs.com/actions) for its
CI/CD pipeline. The main workflow builds Gatsby and, for specific cases, deploys the output to AWS S3 buckets. This workflow is triggered by pushing any branch, a semantic tag, or by the GitHub API's
[`workflow_dispatch`][workflow] and [`repository_dispatch`][repo] events.

The steps of the workflow are:

1. Build Gatsby, retaining its cache between workflow runs
2. Archive the Gatsby output
3. Sync the archive contents to an AWS S3 bucket
4. Clear the AWS Cloudfront cache for the static site

Steps 3-4 will only run for the `dev`, `uat`, `stage`, and `master` branches or any tagged releases.
The `master` branch would normally be excluded, but this workflow can be triggered by the GitHub API's
[`workflow_dispatch`][workflow] and [`repository_dispatch`][repo] events, which use the repository's
default branch.

Note: builds for any non-deployment branches will currently default to using the Drupal `stage` environment
as the Drupal data source.

[workflow]: https://docs.github.com/en/actions/reference/events-that-trigger-workflows#workflow_dispatch
[repo]: https://docs.github.com/en/actions/reference/events-that-trigger-workflows#repository_dispatch
