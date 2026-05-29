import React from 'react';
import { Redirect } from '@docusaurus/router';

// The hand-rolled blog index pointed to /news/<fake-slug> URLs that didn't
// match the real blog posts (their slugs come from the .md frontmatter).
// Real posts live under /news, so just send visitors there.
export default function BlogRedirect() {
  return <Redirect to="/news" />;
}
