import { externalSchematic, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function newProject(_options: any): Rule {

  //const projName = _options.name;
  const cliVersion = _options.cliVersion ?? '15.0.0';
  console.log('The name of the repo will be: ', cliVersion);

  return (_tree: Tree, _context: SchematicContext) => {
    return externalSchematic('@schematics/angular', 'ng-new', {
      version: cliVersion,
      routing: true,
      style: 'scss',
      inlineStyle: false,
      inlineTemplate: false,
      packageManager: 'yarn',
      skipInstall: true
    });
  };
}

function addESLint(): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    return externalSchematic('@schematics/angular', 'ng-add', {
      version: cliVersion,
      routing: true,
      style: 'scss',
      inlineStyle: false,
      inlineTemplate: false,
      packageManager: 'yarn',
      skipInstall: true
    });
  };
}
