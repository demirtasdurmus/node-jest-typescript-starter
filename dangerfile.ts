/* eslint-disable @typescript-eslint/no-unused-vars */
// This is a playground where you can explore the Danger JS
// API and share code samples. Once the red lines below "danger"
// and "path" are gone then you can start to explore writing
// rules for Dangerfiles.

import { danger, fail, markdown, warn, message } from 'danger';
import * as path from 'path';

// API reference: https://danger.systems/js/reference.html

const { pr } = danger.github;

// Find out if some particular files have changed in this PR
const documentation = danger.git.fileMatch('**/*.md');
const changelog = danger.git.fileMatch('CHANGELOG.md');
const packageJson = danger.git.fileMatch('package.json');
const lockfile = danger.git.fileMatch('package-lock.json');

// Rules

// Thank folks for making doc changes
if (documentation.edited) {
    message('Thanks - We :heart: our [documentarians](http://www.writethedocs.org/)!');
}

// Remind people to update lockfiles
if (packageJson.modified && !lockfile.modified) {
    warn('This PR modified package.json, but not the lockfile');
}

// When there are app-changes and it us not a PR marked as trivial, expect
// there to be CHANGELOG changes.
const trivialPR = pr.body.includes('trivial');
if (!changelog.edited && !trivialPR) {
    warn('No CHANGELOG added.');
}

// No PR is too small to warrant a paragraph or two of summary
if (pr.body.length === 0) {
    // fail('Please add a description to your PR.');
    warn('Please add a description to your PR.');
}
// Always ensure we assign someone to a PR, if its a
// if (pr.assignee === null) {
//     const method = pr.title.includes('WIP') ? warn : fail;
//     method('Please assign someone to merge this PR, and optionally include people who should review.');
// }

// Ensure that a label has been set
if (danger.github.issue.labels.length === 0) {
    warn('This PR does not have any labels.');
}
