import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Home Page
      S.listItem()
        .title('Home Page')
        .schemaType('homePage')
        .child(S.document().schemaType('homePage')),
      
      // Projects
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      
      // Contact Submissions
      S.listItem()
        .title('Contact Submissions')
        .schemaType('contactSubmission')
        .child(
          S.documentTypeList('contactSubmission')
            .title('Contact Submissions')
            .filter('_type == "contactSubmission"')
            .defaultOrdering([{field: 'submittedAt', direction: 'desc'}])
        ),
      
      // Divider
      S.divider(),
      
      // All other document types
      ...S.documentTypeListItems().filter(
        (listItem) => !['homePage', 'project', 'contactSubmission'].includes(listItem.getId()!)
      ),
    ])
