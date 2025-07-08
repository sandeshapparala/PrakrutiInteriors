import {type SchemaTypeDefinition} from 'sanity'
import {homePage} from './homePage'
import {project} from './project'
import {contactSubmission} from './contactSubmission'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [homePage, project, contactSubmission],
}
