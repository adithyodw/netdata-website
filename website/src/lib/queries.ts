export const postsQuery = `*[_type == "post"]|order(publishedAt desc){title, "slug": slug.current}`;
export const caseStudiesQuery = `*[_type == "caseStudy"]{title, summary, "slug": slug.current}`;
export const jobsQuery = `*[_type == "job"]{title, location, type, "slug": slug.current}`;
