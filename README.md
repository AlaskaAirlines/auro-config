# Auro Config

This package contains the shared configuration for the development tools used by Auro.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Consuming Configurations](#consuming-configurations)

## Installation

To install Auro CLI, clone the repository and install the dependencies:

```bash
npm install --save-dev @aurodesignsystem/auro-config
```

## Usage

Consume configurations provided to ensure your project aligns with the shared configurations provided by this package.

It is not recommended to modify or otherwise deviate from the configurations provided in this package within individual repositories, components, or other projects that are expected to align with Auro.

## Consuming Configurations

### Biome

1. Ensure sure you have the `@aurodesignsystems/auro-config package` installed in your project as a dev dependency.
2. Create a `biome.json` file in the root directory of your project with the following contents:
  ```json
  {
    "extends": ["@aurodesignsystem/auro-config/biome"]
  }
  ```