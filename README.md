## Adding Images and Albums

### Images

To add images to the site, you need to place the image files in the `src/images/albums/` directory. Ensure the images are in an appropriate format (e.g., jpg, png).

### Albums

An album is a collection of images. To create a new album:

1. Create a new folder inside `src/images/albums/`.
2. Name the folder according to the album's name. Ensure that the name is URL-friendly, as it will be used in the API endpoint.
3. Place all the images for this album inside the folder.

## CI/CD Workflow with GitHub Actions

Our project utilizes a Continuous Integration and Continuous Deployment (CI/CD) workflow via GitHub Actions, ensuring that changes pushed to the main branch are automatically built and deployed.

### Workflow File: Build and Deploy

The [`build-and-deploy.yml`](.github/workflows/build-and-deploy.yml) GitHub Actions workflow is triggered on every push to the `main` branch.

#### Steps Overview

1. **Checkout**: Fetches the latest code from the `main` branch.
2. **Setup Node.js**: Installs Node.js version 18.
3. **Cache Node.js Modules**: Caches the `node_modules` directory to speed up the installation of dependencies.
4. **Install Dependencies**: Installs the project dependencies using `npm ci`, ensuring a clean, consistent install.
5. **Build**: Runs the `npm run build` script with the `--prefix-paths` option for Gatsby.
6. **Deploy**: Deploys the contents of the `./public` directory to GitHub Pages using the `peaceiris/actions-gh-pages` action.

### GitHub Token

The workflow utilizes the `GITHUB_TOKEN` for authentication. This is a special token automatically generated by GitHub for use in workflows, providing access to the repository.

### Caching Dependencies

To optimize build times, the workflow caches the `node_modules` directory based on a hash of the `package-lock.json` file. If dependencies have not changed, this cache is restored, skipping the need to reinstall all dependencies.

### Deployment

The built site is deployed to GitHub Pages. The [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages) action facilitates this deployment, handling the intricacies of pushing to the `gh-pages` branch.