import { externalSchematic, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function newProject(_options: any): Rule {

  const projName = _options.name
  console.log('The name of the repo will be', projName)

  return (_tree: Tree, _context: SchematicContext) => {
    return externalSchematic('@schematics/angular', 'ng-new', {
      projName,
      version: '9.0.0',
      directory: projName,
      routing: true,
      style: 'scss',
      inlineStyle: false,
      inlineTemplate: false,
      packageManager: 'yarn'
    });
  };
}
