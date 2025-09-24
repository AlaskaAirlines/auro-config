# Auro Config

This package contains the shared configuration for the development tools used by Auro.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available configurations](#available-configurations)

## Installation

To install the Auro Config package in your project:

```bash
npm install --save-dev @aurodesignsystem/auro-config
```

## Usage

Update your project's configuration files to extend the shared configurations provided by this package, ensuring alignment with Auro standards.

It is not recommended to modify or otherwise deviate from the configurations provided in this package within individual repositories, components, or other projects that are expected to align with Auro.

## Available configurations

- `biome.json`

   ```json
   {
     "extends": ["@aurodesignsystem/auro-config/biome"]
   }
   ```

- `.stylelintrc`

   ```json
   {
     "extends": ["@aurodesignsystem/auro-config/stylelint"]
   }
   ```

- `.releaserc`

   ```json
   {
     "extends": ["@aurodesignsystem/auro-config/releaserc"]
   }
   ```

- `.commitlintrc`

   ```json
   {
     "extends": ["@aurodesignsystem/auro-config/commitlint"]
   }
   ```

- `.lintstagedrc`

   ```json
   {
     "extends": ["@aurodesignsystem/auro-config/lintstaged"]
   }
   ```
