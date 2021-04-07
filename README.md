**This repository holds the static content for the BCBS.com Blue Health Equity initiative.**

## 🚀 Tech Stack

- Gatsby v3+
- Algolia Instantsearch

## 💫 Deployments

**Note** There is no CI/CD pipleine setup for this repository.

1. Build the Production Site

```
cd hep.bcbs.com
git pull master
gatsby build --prefix-paths
```

**Note** the `--prefix-paths` flag is important for moving this repo over to the main bcbs.com repo.

2. Move the Build files

- Copy/Overwrite the contents of the `public` folder into a new feature branch in the main [BCBS.com repo](https://github.com/oomphinc/bcbs.com) `bluehealthequity` directory.
- Follow the BCBS.com GitHub release procedure.
