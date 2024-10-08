{
  description = "Shell env for blog";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = inputs @ {flake-parts, ...}:
    flake-parts.lib.mkFlake {inherit inputs;} {
      imports = [];
      systems = ["x86_64-linux" "aarch64-linux" "aarch64-darwin" "x86_64-darwin"];
      perSystem = {
        config,
        self',
        inputs',
        pkgs,
        system,
        ...
      }: {
        # Per-system attributes can be defined here. The self' and inputs'
        # module parameters provide easy access to attributes of the same
        # system.
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            biome
            chromium
            hut
            nodejs_20
            php
            phpPackages.composer
            pre-commit
            vips
          ];
          shellHook = with pkgs; ''
            ${lib.getExe pre-commit} install
            export PUPPETEER_SKIP_DOWNLOAD=true
            export PUPPETEER_EXECUTABLE_PATH=${lib.getExe chromium}
            export GATSBY_TELEMETRY_DISABLED=1
            export SHARP_FORCE_GLOBAL_LIBVIPS=1
            export BIOME_BINARY=${lib.getExe biome}
          '';
        };
        formatter = pkgs.alejandra;
      };
      flake = {};
    };
}
