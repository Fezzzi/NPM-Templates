import inquirer from 'inquirer'
import { readFileSync, writeFileSync, readdirSync, mkdirSync, statSync, existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const PROJECT_NAME_PLACEHOLDER_REGEX = '@\\[Project Name Placeholder\\]@'

const DIR = dirname(fileURLToPath(import.meta.url))
const TEMPLATES = readdirSync(join(DIR, 'templates'))
const CWD = process.cwd()

const QUESTIONS = [
  {
    name: 'template',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: TEMPLATES,
  },
  {
    name: 'name',
    type: 'input',
    message: 'Project name:',
    validate: input => {
      const dir = join(CWD, input)
      if (existsSync(dir)) {
        return `Directory ${dir} already exists, please select different name.`
      }

      return true
    }
  }
];

const createProjectDirContent = (templatePath, projectPath, projectName) => {
  const filesToCreate = readdirSync(templatePath)

  filesToCreate.forEach(file => {
    const filePath = join(templatePath, file)
    const stats = statSync(filePath)

    if (stats.isFile()) {
      const content = readFileSync(filePath, 'utf8')
      const writePath = join(CWD, projectPath, file)

      const re = new RegExp(PROJECT_NAME_PLACEHOLDER_REGEX, 'g')
      const newContent = content.replace(re, file === 'package.json'
        ? projectName.replace(/ /g, '-')
        : projectName
      )

      writeFileSync(writePath, newContent, 'utf8')
    } else {
      mkdirSync(join(CWD, projectPath, file))

      createProjectDirContent(join(templatePath, file), join(projectPath, file), projectName)
    }
  });
}

inquirer.prompt(QUESTIONS).then(answers => {
  const template = answers.template
  const projectName = answers.name
  const templatePath = join(DIR, 'templates', template)

  mkdirSync(join(CWD, projectName))

  createProjectDirContent(templatePath, projectName, projectName)
})
