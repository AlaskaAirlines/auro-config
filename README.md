# Auro Config

This package contains the shared configuration for the development tools used by Auro.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Updating Configurations](#updating-configurations)

## Installation

To install the Auro Config package in your project:

```bash
npm install --save-dev @aurodesignsystem/auro-config
```

## Usage

Update your project's configuration files to extend the shared configurations provided by this package, ensuring alignment with Auro standards.

It is not recommended to modify or otherwise deviate from the configurations provided in this package within individual repositories, components, or other projects that are expected to align with Auro.

## Updating Configurations

### Biome + Stylelint

1. Install or update the configuration package as a dev dependency:

   ```bash
   npm install --save-dev @aurodesignsystem/auro-config
   ```

2. Update your existing `biome.json` file to extend the shared configuration:

   ```json
   {
     "extends": ["@aurodesignsystem/auro-config/biome"]
   }
   ```

3. Update your existing `.stylelintrc` file to extend the shared configuration:

   ```json
   {
     "extends": ["@aurodesignsystem/auro-config/stylelint"]
   }
   ```

4. Update your existing `.releaserc` file to extend the shared configuration:

   ```json
   {
     "extends": ["@aurodesignsystem/auro-config/releaserc"]
   }
   ```
