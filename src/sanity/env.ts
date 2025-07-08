// Hard-coded values for production deployment (recommended by Sanity team)
export const projectId = 'qpervfn7'
export const dataset = 'production'
export const apiVersion = '2025-07-07'

// Fallback to environment variables for development
export const projectIdFromEnv = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || projectId,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const datasetFromEnv = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || dataset,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const apiVersionFromEnv = process.env.NEXT_PUBLIC_SANITY_API_VERSION || apiVersion

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
