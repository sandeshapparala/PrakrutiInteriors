import {type SchemaTypeDefinition} from 'sanity'
import {homePage} from './homePage'
import {project} from './project'
import {contactSubmission} from './contactSubmission'
import {testimonial} from './testimonial'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [homePage, project, contactSubmission, testimonial],
}
