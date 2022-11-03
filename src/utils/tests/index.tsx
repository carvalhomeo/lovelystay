import { ReactElement, ReactNode } from "react";
import { rest } from "msw";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/shared/lib/router-context";

const reposList = [
  {
    id: 370775161,
    node_id: "MDEwOlJlcG9zaXRvcnkzNzA3NzUxNjE=",
    name: ".kenv",
    full_name: "kentcdodds/.kenv",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/.kenv",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/kentcdodds/.kenv",
    forks_url: "https://api.github.com/repos/kentcdodds/.kenv/forks",
    keys_url: "https://api.github.com/repos/kentcdodds/.kenv/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/.kenv/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kentcdodds/.kenv/teams",
    hooks_url: "https://api.github.com/repos/kentcdodds/.kenv/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/.kenv/issues/events{/number}",
    events_url: "https://api.github.com/repos/kentcdodds/.kenv/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/.kenv/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/.kenv/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/.kenv/tags",
    blobs_url: "https://api.github.com/repos/kentcdodds/.kenv/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/.kenv/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/.kenv/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kentcdodds/.kenv/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/.kenv/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kentcdodds/.kenv/languages",
    stargazers_url: "https://api.github.com/repos/kentcdodds/.kenv/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/.kenv/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/.kenv/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/.kenv/subscription",
    commits_url: "https://api.github.com/repos/kentcdodds/.kenv/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/.kenv/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/.kenv/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/.kenv/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/.kenv/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/.kenv/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kentcdodds/.kenv/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/.kenv/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kentcdodds/.kenv/downloads",
    issues_url: "https://api.github.com/repos/kentcdodds/.kenv/issues{/number}",
    pulls_url: "https://api.github.com/repos/kentcdodds/.kenv/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/.kenv/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/.kenv/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kentcdodds/.kenv/labels{/name}",
    releases_url: "https://api.github.com/repos/kentcdodds/.kenv/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/.kenv/deployments",
    created_at: "2021-05-25T17:26:22Z",
    updated_at: "2022-09-13T21:45:38Z",
    pushed_at: "2022-09-06T16:44:03Z",
    git_url: "git://github.com/kentcdodds/.kenv.git",
    ssh_url: "git@github.com:kentcdodds/.kenv.git",
    clone_url: "https://github.com/kentcdodds/.kenv.git",
    svn_url: "https://github.com/kentcdodds/.kenv",
    homepage: "",
    size: 271,
    stargazers_count: 36,
    watchers_count: 36,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 36,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 202242792,
    node_id: "MDEwOlJlcG9zaXRvcnkyMDIyNDI3OTI=",
    name: "10-practical-js-features",
    full_name: "kentcdodds/10-practical-js-features",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/10-practical-js-features",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/kentcdodds/10-practical-js-features",
    forks_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/10-practical-js-features/deployments",
    created_at: "2019-08-14T00:26:10Z",
    updated_at: "2021-12-11T14:36:37Z",
    pushed_at: "2021-01-25T22:54:55Z",
    git_url: "git://github.com/kentcdodds/10-practical-js-features.git",
    ssh_url: "git@github.com:kentcdodds/10-practical-js-features.git",
    clone_url: "https://github.com/kentcdodds/10-practical-js-features.git",
    svn_url: "https://github.com/kentcdodds/10-practical-js-features",
    homepage: "",
    size: 138,
    stargazers_count: 67,
    watchers_count: 67,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 3,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["javascript", "kcd-edu"],
    visibility: "public",
    forks: 3,
    open_issues: 1,
    watchers: 67,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 22998011,
    node_id: "MDEwOlJlcG9zaXRvcnkyMjk5ODAxMQ==",
    name: "2014",
    full_name: "kentcdodds/2014",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/2014",
    description: "2014 Conference Presentations",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/2014",
    forks_url: "https://api.github.com/repos/kentcdodds/2014/forks",
    keys_url: "https://api.github.com/repos/kentcdodds/2014/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/2014/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kentcdodds/2014/teams",
    hooks_url: "https://api.github.com/repos/kentcdodds/2014/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/2014/issues/events{/number}",
    events_url: "https://api.github.com/repos/kentcdodds/2014/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/2014/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/2014/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/2014/tags",
    blobs_url: "https://api.github.com/repos/kentcdodds/2014/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/kentcdodds/2014/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/kentcdodds/2014/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kentcdodds/2014/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/kentcdodds/2014/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kentcdodds/2014/languages",
    stargazers_url: "https://api.github.com/repos/kentcdodds/2014/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/2014/contributors",
    subscribers_url: "https://api.github.com/repos/kentcdodds/2014/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/2014/subscription",
    commits_url: "https://api.github.com/repos/kentcdodds/2014/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/2014/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/2014/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/2014/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/2014/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/2014/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kentcdodds/2014/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/2014/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kentcdodds/2014/downloads",
    issues_url: "https://api.github.com/repos/kentcdodds/2014/issues{/number}",
    pulls_url: "https://api.github.com/repos/kentcdodds/2014/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/2014/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/2014/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kentcdodds/2014/labels{/name}",
    releases_url: "https://api.github.com/repos/kentcdodds/2014/releases{/id}",
    deployments_url: "https://api.github.com/repos/kentcdodds/2014/deployments",
    created_at: "2014-08-15T17:51:59Z",
    updated_at: "2014-08-15T18:03:46Z",
    pushed_at: "2020-10-30T22:33:18Z",
    git_url: "git://github.com/kentcdodds/2014.git",
    ssh_url: "git@github.com:kentcdodds/2014.git",
    clone_url: "https://github.com/kentcdodds/2014.git",
    svn_url: "https://github.com/kentcdodds/2014",
    homepage: "",
    size: 33345,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 1,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 18810691,
    node_id: "MDEwOlJlcG9zaXRvcnkxODgxMDY5MQ==",
    name: "2014.cascadiajs.com",
    full_name: "kentcdodds/2014.cascadiajs.com",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/2014.cascadiajs.com",
    description:
      "This is the official repo for the CascadiaJS 2014 conference.",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com",
    forks_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/2014.cascadiajs.com/deployments",
    created_at: "2014-04-15T18:16:59Z",
    updated_at: "2014-04-16T00:00:54Z",
    pushed_at: "2020-10-30T22:33:24Z",
    git_url: "git://github.com/kentcdodds/2014.cascadiajs.com.git",
    ssh_url: "git@github.com:kentcdodds/2014.cascadiajs.com.git",
    clone_url: "https://github.com/kentcdodds/2014.cascadiajs.com.git",
    svn_url: "https://github.com/kentcdodds/2014.cascadiajs.com",
    homepage: "",
    size: 53875,
    stargazers_count: 0,
    watchers_count: 0,
    language: "CSS",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 1,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 40661356,
    node_id: "MDEwOlJlcG9zaXRvcnk0MDY2MTM1Ng==",
    name: "2015",
    full_name: "kentcdodds/2015",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/2015",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/kentcdodds/2015",
    forks_url: "https://api.github.com/repos/kentcdodds/2015/forks",
    keys_url: "https://api.github.com/repos/kentcdodds/2015/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/2015/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kentcdodds/2015/teams",
    hooks_url: "https://api.github.com/repos/kentcdodds/2015/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/2015/issues/events{/number}",
    events_url: "https://api.github.com/repos/kentcdodds/2015/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/2015/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/2015/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/2015/tags",
    blobs_url: "https://api.github.com/repos/kentcdodds/2015/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/kentcdodds/2015/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/kentcdodds/2015/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kentcdodds/2015/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/kentcdodds/2015/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kentcdodds/2015/languages",
    stargazers_url: "https://api.github.com/repos/kentcdodds/2015/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/2015/contributors",
    subscribers_url: "https://api.github.com/repos/kentcdodds/2015/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/2015/subscription",
    commits_url: "https://api.github.com/repos/kentcdodds/2015/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/2015/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/2015/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/2015/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/2015/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/2015/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kentcdodds/2015/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/2015/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kentcdodds/2015/downloads",
    issues_url: "https://api.github.com/repos/kentcdodds/2015/issues{/number}",
    pulls_url: "https://api.github.com/repos/kentcdodds/2015/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/2015/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/2015/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kentcdodds/2015/labels{/name}",
    releases_url: "https://api.github.com/repos/kentcdodds/2015/releases{/id}",
    deployments_url: "https://api.github.com/repos/kentcdodds/2015/deployments",
    created_at: "2015-08-13T13:52:26Z",
    updated_at: "2021-01-25T22:23:08Z",
    pushed_at: "2015-08-13T13:57:02Z",
    git_url: "git://github.com/kentcdodds/2015.git",
    ssh_url: "git@github.com:kentcdodds/2015.git",
    clone_url: "https://github.com/kentcdodds/2015.git",
    svn_url: "https://github.com/kentcdodds/2015",
    homepage: null,
    size: 95,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 66381489,
    node_id: "MDEwOlJlcG9zaXRvcnk2NjM4MTQ4OQ==",
    name: "2016",
    full_name: "kentcdodds/2016",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/2016",
    description: null,
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/2016",
    forks_url: "https://api.github.com/repos/kentcdodds/2016/forks",
    keys_url: "https://api.github.com/repos/kentcdodds/2016/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/2016/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kentcdodds/2016/teams",
    hooks_url: "https://api.github.com/repos/kentcdodds/2016/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/2016/issues/events{/number}",
    events_url: "https://api.github.com/repos/kentcdodds/2016/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/2016/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/2016/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/2016/tags",
    blobs_url: "https://api.github.com/repos/kentcdodds/2016/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/kentcdodds/2016/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/kentcdodds/2016/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kentcdodds/2016/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/kentcdodds/2016/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kentcdodds/2016/languages",
    stargazers_url: "https://api.github.com/repos/kentcdodds/2016/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/2016/contributors",
    subscribers_url: "https://api.github.com/repos/kentcdodds/2016/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/2016/subscription",
    commits_url: "https://api.github.com/repos/kentcdodds/2016/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/2016/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/2016/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/2016/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/2016/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/2016/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kentcdodds/2016/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/2016/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kentcdodds/2016/downloads",
    issues_url: "https://api.github.com/repos/kentcdodds/2016/issues{/number}",
    pulls_url: "https://api.github.com/repos/kentcdodds/2016/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/2016/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/2016/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kentcdodds/2016/labels{/name}",
    releases_url: "https://api.github.com/repos/kentcdodds/2016/releases{/id}",
    deployments_url: "https://api.github.com/repos/kentcdodds/2016/deployments",
    created_at: "2016-08-23T15:54:35Z",
    updated_at: "2019-07-15T22:47:53Z",
    pushed_at: "2020-10-30T22:39:43Z",
    git_url: "git://github.com/kentcdodds/2016.git",
    ssh_url: "git@github.com:kentcdodds/2016.git",
    clone_url: "https://github.com/kentcdodds/2016.git",
    svn_url: "https://github.com/kentcdodds/2016",
    homepage: null,
    size: 28072,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 1,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 17995681,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzk5NTY4MQ==",
    name: "2048",
    full_name: "kentcdodds/2048",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/2048",
    description:
      "A small clone of 1024 (https://play.google.com/store/apps/details?id=com.veewo.a1024)",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/2048",
    forks_url: "https://api.github.com/repos/kentcdodds/2048/forks",
    keys_url: "https://api.github.com/repos/kentcdodds/2048/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/2048/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kentcdodds/2048/teams",
    hooks_url: "https://api.github.com/repos/kentcdodds/2048/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/2048/issues/events{/number}",
    events_url: "https://api.github.com/repos/kentcdodds/2048/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/2048/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/2048/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/2048/tags",
    blobs_url: "https://api.github.com/repos/kentcdodds/2048/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/kentcdodds/2048/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/kentcdodds/2048/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kentcdodds/2048/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/kentcdodds/2048/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kentcdodds/2048/languages",
    stargazers_url: "https://api.github.com/repos/kentcdodds/2048/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/2048/contributors",
    subscribers_url: "https://api.github.com/repos/kentcdodds/2048/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/2048/subscription",
    commits_url: "https://api.github.com/repos/kentcdodds/2048/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/2048/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/2048/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/2048/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/2048/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/2048/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kentcdodds/2048/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/2048/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kentcdodds/2048/downloads",
    issues_url: "https://api.github.com/repos/kentcdodds/2048/issues{/number}",
    pulls_url: "https://api.github.com/repos/kentcdodds/2048/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/2048/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/2048/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kentcdodds/2048/labels{/name}",
    releases_url: "https://api.github.com/repos/kentcdodds/2048/releases{/id}",
    deployments_url: "https://api.github.com/repos/kentcdodds/2048/deployments",
    created_at: "2014-03-21T21:56:43Z",
    updated_at: "2015-05-13T12:38:34Z",
    pushed_at: "2020-10-30T22:32:20Z",
    git_url: "git://github.com/kentcdodds/2048.git",
    ssh_url: "git@github.com:kentcdodds/2048.git",
    clone_url: "https://github.com/kentcdodds/2048.git",
    svn_url: "https://github.com/kentcdodds/2048",
    homepage: "http://kentcdodds.com/2048",
    size: 561,
    stargazers_count: 0,
    watchers_count: 0,
    language: "CSS",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 1,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 485612471,
    node_id: "R_kgDOHPHbtw",
    name: "acme-blog",
    full_name: "kentcdodds/acme-blog",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/acme-blog",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/kentcdodds/acme-blog",
    forks_url: "https://api.github.com/repos/kentcdodds/acme-blog/forks",
    keys_url: "https://api.github.com/repos/kentcdodds/acme-blog/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kentcdodds/acme-blog/teams",
    hooks_url: "https://api.github.com/repos/kentcdodds/acme-blog/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/issues/events{/number}",
    events_url: "https://api.github.com/repos/kentcdodds/acme-blog/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/acme-blog/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kentcdodds/acme-blog/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/acme-blog/deployments",
    created_at: "2022-04-26T02:56:03Z",
    updated_at: "2022-04-26T03:16:41Z",
    pushed_at: "2022-04-26T03:22:49Z",
    git_url: "git://github.com/kentcdodds/acme-blog.git",
    ssh_url: "git@github.com:kentcdodds/acme-blog.git",
    clone_url: "https://github.com/kentcdodds/acme-blog.git",
    svn_url: "https://github.com/kentcdodds/acme-blog",
    homepage: "",
    size: 303,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 112588405,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTI1ODg0MDU=",
    name: "advanced-downshift",
    full_name: "kentcdodds/advanced-downshift",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/advanced-downshift",
    description: "Created with CodeSandbox",
    fork: false,
    url: "https://api.github.com/repos/kentcdodds/advanced-downshift",
    forks_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/advanced-downshift/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/advanced-downshift/deployments",
    created_at: "2017-11-30T08:55:34Z",
    updated_at: "2022-09-19T07:20:49Z",
    pushed_at: "2021-01-25T23:22:26Z",
    git_url: "git://github.com/kentcdodds/advanced-downshift.git",
    ssh_url: "git@github.com:kentcdodds/advanced-downshift.git",
    clone_url: "https://github.com/kentcdodds/advanced-downshift.git",
    svn_url: "https://github.com/kentcdodds/advanced-downshift",
    homepage: "https://codesandbox.io/s/github/kentcdodds/advanced-downshift",
    size: 54,
    stargazers_count: 24,
    watchers_count: 24,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 3,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["kcd-edu"],
    visibility: "public",
    forks: 3,
    open_issues: 0,
    watchers: 24,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 183267843,
    node_id: "MDEwOlJlcG9zaXRvcnkxODMyNjc4NDM=",
    name: "advanced-react-hooks",
    full_name: "kentcdodds/advanced-react-hooks",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/advanced-react-hooks",
    description: "Learn Advanced React Hooks workshop",
    fork: false,
    url: "https://api.github.com/repos/kentcdodds/advanced-react-hooks",
    forks_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-hooks/deployments",
    created_at: "2019-04-24T16:33:31Z",
    updated_at: "2022-11-02T15:32:39Z",
    pushed_at: "2022-10-11T23:21:48Z",
    git_url: "git://github.com/kentcdodds/advanced-react-hooks.git",
    ssh_url: "git@github.com:kentcdodds/advanced-react-hooks.git",
    clone_url: "https://github.com/kentcdodds/advanced-react-hooks.git",
    svn_url: "https://github.com/kentcdodds/advanced-react-hooks",
    homepage: "https://epicreact.dev/advanced-hooks",
    size: 3684,
    stargazers_count: 1766,
    watchers_count: 1766,
    language: "JavaScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 1054,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 6,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["epicreact-dev", "hooks", "kcd-edu", "react"],
    visibility: "public",
    forks: 1054,
    open_issues: 6,
    watchers: 1766,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 170207515,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzAyMDc1MTU=",
    name: "advanced-react-patterns",
    full_name: "kentcdodds/advanced-react-patterns",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/advanced-react-patterns",
    description: "This is the latest advanced react patterns workshop",
    fork: false,
    url: "https://api.github.com/repos/kentcdodds/advanced-react-patterns",
    forks_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns/deployments",
    created_at: "2019-02-11T21:46:26Z",
    updated_at: "2022-11-03T01:58:28Z",
    pushed_at: "2022-09-25T06:28:12Z",
    git_url: "git://github.com/kentcdodds/advanced-react-patterns.git",
    ssh_url: "git@github.com:kentcdodds/advanced-react-patterns.git",
    clone_url: "https://github.com/kentcdodds/advanced-react-patterns.git",
    svn_url: "https://github.com/kentcdodds/advanced-react-patterns",
    homepage: "https://epicreact.dev/patterns",
    size: 3394,
    stargazers_count: 2614,
    watchers_count: 2614,
    language: "JavaScript",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 856,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "epicreact-dev",
      "kcd-edu",
      "react",
      "react-components",
      "react-patterns",
      "workshop",
    ],
    visibility: "public",
    forks: 856,
    open_issues: 1,
    watchers: 2614,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 110020861,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTAwMjA4NjE=",
    name: "advanced-react-patterns-v1",
    full_name: "kentcdodds/advanced-react-patterns-v1",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/advanced-react-patterns-v1",
    description:
      "The course material for my advanced react patterns course on Egghead.io",
    fork: false,
    url: "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1",
    forks_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v1/deployments",
    created_at: "2017-11-08T19:28:48Z",
    updated_at: "2022-09-23T02:27:32Z",
    pushed_at: "2021-01-25T23:22:32Z",
    git_url: "git://github.com/kentcdodds/advanced-react-patterns-v1.git",
    ssh_url: "git@github.com:kentcdodds/advanced-react-patterns-v1.git",
    clone_url: "https://github.com/kentcdodds/advanced-react-patterns-v1.git",
    svn_url: "https://github.com/kentcdodds/advanced-react-patterns-v1",
    homepage: "https://egghead.io/courses/advanced-react-component-patterns",
    size: 68,
    stargazers_count: 1094,
    watchers_count: 1094,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 155,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["kcd-edu"],
    visibility: "public",
    forks: 155,
    open_issues: 0,
    watchers: 1094,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 127754768,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjc3NTQ3Njg=",
    name: "advanced-react-patterns-v2",
    full_name: "kentcdodds/advanced-react-patterns-v2",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/advanced-react-patterns-v2",
    description: "Created with CodeSandbox",
    fork: false,
    url: "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2",
    forks_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/advanced-react-patterns-v2/deployments",
    created_at: "2018-04-02T12:43:28Z",
    updated_at: "2022-10-04T08:45:50Z",
    pushed_at: "2021-01-25T23:01:58Z",
    git_url: "git://github.com/kentcdodds/advanced-react-patterns-v2.git",
    ssh_url: "git@github.com:kentcdodds/advanced-react-patterns-v2.git",
    clone_url: "https://github.com/kentcdodds/advanced-react-patterns-v2.git",
    svn_url: "https://github.com/kentcdodds/advanced-react-patterns-v2",
    homepage:
      "https://codesandbox.io/s/github/kentcdodds/advanced-react-patterns-v2",
    size: 297,
    stargazers_count: 1500,
    watchers_count: 1500,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 579,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 4,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["javascript", "kcd-edu", "react"],
    visibility: "public",
    forks: 579,
    open_issues: 4,
    watchers: 1500,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 494258143,
    node_id: "R_kgDOHXXH3w",
    name: "advanced-remix",
    full_name: "kentcdodds/advanced-remix",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/advanced-remix",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/kentcdodds/advanced-remix",
    forks_url: "https://api.github.com/repos/kentcdodds/advanced-remix/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kentcdodds/advanced-remix/teams",
    hooks_url: "https://api.github.com/repos/kentcdodds/advanced-remix/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/issues/events{/number}",
    events_url: "https://api.github.com/repos/kentcdodds/advanced-remix/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/advanced-remix/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kentcdodds/advanced-remix/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/advanced-remix/deployments",
    created_at: "2022-05-19T23:25:25Z",
    updated_at: "2022-10-17T14:57:07Z",
    pushed_at: "2022-08-08T22:55:51Z",
    git_url: "git://github.com/kentcdodds/advanced-remix.git",
    ssh_url: "git@github.com:kentcdodds/advanced-remix.git",
    clone_url: "https://github.com/kentcdodds/advanced-remix.git",
    svn_url: "https://github.com/kentcdodds/advanced-remix",
    homepage: "",
    size: 601,
    stargazers_count: 385,
    watchers_count: 385,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 43,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["kcd-edu"],
    visibility: "public",
    forks: 43,
    open_issues: 1,
    watchers: 385,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 214533145,
    node_id: "MDEwOlJlcG9zaXRvcnkyMTQ1MzMxNDU=",
    name: "aha-programming-slides",
    full_name: "kentcdodds/aha-programming-slides",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/aha-programming-slides",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/kentcdodds/aha-programming-slides",
    forks_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/aha-programming-slides/deployments",
    created_at: "2019-10-11T21:42:13Z",
    updated_at: "2022-10-27T22:54:46Z",
    pushed_at: "2021-01-25T23:11:16Z",
    git_url: "git://github.com/kentcdodds/aha-programming-slides.git",
    ssh_url: "git@github.com:kentcdodds/aha-programming-slides.git",
    clone_url: "https://github.com/kentcdodds/aha-programming-slides.git",
    svn_url: "https://github.com/kentcdodds/aha-programming-slides",
    homepage: "https://kentcdodds.com/talks/#aha-programming",
    size: 9,
    stargazers_count: 42,
    watchers_count: 42,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 6,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["kcd-edu", "slides"],
    visibility: "public",
    forks: 6,
    open_issues: 0,
    watchers: 42,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 160411619,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjA0MTE2MTk=",
    name: "airtable-netlify-short-urls",
    full_name: "kentcdodds/airtable-netlify-short-urls",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/airtable-netlify-short-urls",
    description:
      "There's a simpler version using Netlify redirects instead of Airtable here",
    fork: false,
    url: "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls",
    forks_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/airtable-netlify-short-urls/deployments",
    created_at: "2018-12-04T19:58:41Z",
    updated_at: "2022-08-06T08:36:23Z",
    pushed_at: "2021-01-25T23:11:42Z",
    git_url: "git://github.com/kentcdodds/airtable-netlify-short-urls.git",
    ssh_url: "git@github.com:kentcdodds/airtable-netlify-short-urls.git",
    clone_url: "https://github.com/kentcdodds/airtable-netlify-short-urls.git",
    svn_url: "https://github.com/kentcdodds/airtable-netlify-short-urls",
    homepage: "https://github.com/kentcdodds/netlify-shortener",
    size: 219,
    stargazers_count: 57,
    watchers_count: 57,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 21,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 21,
    open_issues: 0,
    watchers: 57,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 38583384,
    node_id: "MDEwOlJlcG9zaXRvcnkzODU4MzM4NA==",
    name: "ama",
    full_name: "kentcdodds/ama",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/ama",
    description: "Ask me anything!",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/ama",
    forks_url: "https://api.github.com/repos/kentcdodds/ama/forks",
    keys_url: "https://api.github.com/repos/kentcdodds/ama/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/ama/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kentcdodds/ama/teams",
    hooks_url: "https://api.github.com/repos/kentcdodds/ama/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/ama/issues/events{/number}",
    events_url: "https://api.github.com/repos/kentcdodds/ama/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/ama/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/ama/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/ama/tags",
    blobs_url: "https://api.github.com/repos/kentcdodds/ama/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/kentcdodds/ama/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/kentcdodds/ama/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kentcdodds/ama/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/kentcdodds/ama/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kentcdodds/ama/languages",
    stargazers_url: "https://api.github.com/repos/kentcdodds/ama/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/ama/contributors",
    subscribers_url: "https://api.github.com/repos/kentcdodds/ama/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/ama/subscription",
    commits_url: "https://api.github.com/repos/kentcdodds/ama/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/ama/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/ama/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/ama/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/ama/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/ama/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kentcdodds/ama/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/ama/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kentcdodds/ama/downloads",
    issues_url: "https://api.github.com/repos/kentcdodds/ama/issues{/number}",
    pulls_url: "https://api.github.com/repos/kentcdodds/ama/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/ama/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/ama/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kentcdodds/ama/labels{/name}",
    releases_url: "https://api.github.com/repos/kentcdodds/ama/releases{/id}",
    deployments_url: "https://api.github.com/repos/kentcdodds/ama/deployments",
    created_at: "2015-07-05T20:43:57Z",
    updated_at: "2022-11-02T14:33:03Z",
    pushed_at: "2020-12-02T18:43:41Z",
    git_url: "git://github.com/kentcdodds/ama.git",
    ssh_url: "git@github.com:kentcdodds/ama.git",
    clone_url: "https://github.com/kentcdodds/ama.git",
    svn_url: "https://github.com/kentcdodds/ama",
    homepage:
      "https://github.com/kentcdodds/ama/issues?q=is%3Aissue+is%3Aclosed",
    size: 16,
    stargazers_count: 674,
    watchers_count: 674,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 73,
    mirror_url: null,
    archived: true,
    disabled: false,
    open_issues_count: 128,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["ama", "answers", "kentcdodds", "questions"],
    visibility: "public",
    forks: 73,
    open_issues: 128,
    watchers: 674,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 38583577,
    node_id: "MDEwOlJlcG9zaXRvcnkzODU4MzU3Nw==",
    name: "amas",
    full_name: "kentcdodds/amas",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/amas",
    description: "Awesome & Marvelous Amas",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/amas",
    forks_url: "https://api.github.com/repos/kentcdodds/amas/forks",
    keys_url: "https://api.github.com/repos/kentcdodds/amas/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/amas/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kentcdodds/amas/teams",
    hooks_url: "https://api.github.com/repos/kentcdodds/amas/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/amas/issues/events{/number}",
    events_url: "https://api.github.com/repos/kentcdodds/amas/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/amas/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/amas/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/amas/tags",
    blobs_url: "https://api.github.com/repos/kentcdodds/amas/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/kentcdodds/amas/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/kentcdodds/amas/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/kentcdodds/amas/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/kentcdodds/amas/statuses/{sha}",
    languages_url: "https://api.github.com/repos/kentcdodds/amas/languages",
    stargazers_url: "https://api.github.com/repos/kentcdodds/amas/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/amas/contributors",
    subscribers_url: "https://api.github.com/repos/kentcdodds/amas/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/amas/subscription",
    commits_url: "https://api.github.com/repos/kentcdodds/amas/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/amas/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/amas/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/amas/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/amas/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/amas/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kentcdodds/amas/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/amas/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/kentcdodds/amas/downloads",
    issues_url: "https://api.github.com/repos/kentcdodds/amas/issues{/number}",
    pulls_url: "https://api.github.com/repos/kentcdodds/amas/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/amas/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/amas/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/kentcdodds/amas/labels{/name}",
    releases_url: "https://api.github.com/repos/kentcdodds/amas/releases{/id}",
    deployments_url: "https://api.github.com/repos/kentcdodds/amas/deployments",
    created_at: "2015-07-05T20:50:11Z",
    updated_at: "2019-07-15T22:47:39Z",
    pushed_at: "2015-07-07T19:31:34Z",
    git_url: "git://github.com/kentcdodds/amas.git",
    ssh_url: "git@github.com:kentcdodds/amas.git",
    clone_url: "https://github.com/kentcdodds/amas.git",
    svn_url: "https://github.com/kentcdodds/amas",
    homepage: "",
    size: 95,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 20256139,
    node_id: "MDEwOlJlcG9zaXRvcnkyMDI1NjEzOQ==",
    name: "angular-data",
    full_name: "kentcdodds/angular-data",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/angular-data",
    description: "Data store for Angular.js.",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/angular-data",
    forks_url: "https://api.github.com/repos/kentcdodds/angular-data/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/angular-data/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/angular-data/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kentcdodds/angular-data/teams",
    hooks_url: "https://api.github.com/repos/kentcdodds/angular-data/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/angular-data/issues/events{/number}",
    events_url: "https://api.github.com/repos/kentcdodds/angular-data/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/angular-data/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/angular-data/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/angular-data/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/angular-data/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/angular-data/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/angular-data/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/angular-data/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/angular-data/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/angular-data/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/angular-data/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/angular-data/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/angular-data/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/angular-data/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/angular-data/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/angular-data/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/angular-data/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/angular-data/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/angular-data/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/angular-data/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kentcdodds/angular-data/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/angular-data/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/angular-data/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/angular-data/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/angular-data/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/angular-data/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/angular-data/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/angular-data/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/angular-data/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/angular-data/deployments",
    created_at: "2014-05-28T12:12:05Z",
    updated_at: "2019-07-15T22:47:31Z",
    pushed_at: "2020-10-30T22:35:50Z",
    git_url: "git://github.com/kentcdodds/angular-data.git",
    ssh_url: "git@github.com:kentcdodds/angular-data.git",
    clone_url: "https://github.com/kentcdodds/angular-data.git",
    svn_url: "https://github.com/kentcdodds/angular-data",
    homepage: "http://angular-data.codetrain.io/",
    size: 2158,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 1,
    watchers: 1,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 44852433,
    node_id: "MDEwOlJlcG9zaXRvcnk0NDg1MjQzMw==",
    name: "angular-formly",
    full_name: "kentcdodds/angular-formly",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/angular-formly",
    description: "JavaScript powered forms for AngularJS",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/angular-formly",
    forks_url: "https://api.github.com/repos/kentcdodds/angular-formly/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kentcdodds/angular-formly/teams",
    hooks_url: "https://api.github.com/repos/kentcdodds/angular-formly/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/issues/events{/number}",
    events_url: "https://api.github.com/repos/kentcdodds/angular-formly/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/angular-formly/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kentcdodds/angular-formly/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/angular-formly/deployments",
    created_at: "2015-10-24T04:38:11Z",
    updated_at: "2019-07-15T22:47:42Z",
    pushed_at: "2015-10-24T04:55:54Z",
    git_url: "git://github.com/kentcdodds/angular-formly.git",
    ssh_url: "git@github.com:kentcdodds/angular-formly.git",
    clone_url: "https://github.com/kentcdodds/angular-formly.git",
    svn_url: "https://github.com/kentcdodds/angular-formly",
    homepage: "http://docs.angular-formly.com",
    size: 28788,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 30048315,
    node_id: "MDEwOlJlcG9zaXRvcnkzMDA0ODMxNQ==",
    name: "angular-formly-convert",
    full_name: "kentcdodds/angular-formly-convert",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/angular-formly-convert",
    description: "Repo used in the angular-formly talk at ng-nl conference.",
    fork: false,
    url: "https://api.github.com/repos/kentcdodds/angular-formly-convert",
    forks_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-convert/deployments",
    created_at: "2015-01-30T00:24:04Z",
    updated_at: "2021-01-25T23:11:48Z",
    pushed_at: "2021-01-25T23:11:46Z",
    git_url: "git://github.com/kentcdodds/angular-formly-convert.git",
    ssh_url: "git@github.com:kentcdodds/angular-formly-convert.git",
    clone_url: "https://github.com/kentcdodds/angular-formly-convert.git",
    svn_url: "https://github.com/kentcdodds/angular-formly-convert",
    homepage: "https://youtu.be/o90TMDL3OYc",
    size: 5338,
    stargazers_count: 7,
    watchers_count: 7,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 4,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 4,
    open_issues: 1,
    watchers: 7,
    default_branch: "main",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 41822022,
    node_id: "MDEwOlJlcG9zaXRvcnk0MTgyMjAyMg==",
    name: "angular-formly-example",
    full_name: "kentcdodds/angular-formly-example",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/angular-formly-example",
    description:
      "An example application that uses angular-formly, mostly as a demonstration as well as a place to learn how to use protractor :-)",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/angular-formly-example",
    forks_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-example/deployments",
    created_at: "2015-09-02T19:06:03Z",
    updated_at: "2015-09-02T19:06:03Z",
    pushed_at: "2015-09-02T19:06:12Z",
    git_url: "git://github.com/kentcdodds/angular-formly-example.git",
    ssh_url: "git@github.com:kentcdodds/angular-formly-example.git",
    clone_url: "https://github.com/kentcdodds/angular-formly-example.git",
    svn_url: "https://github.com/kentcdodds/angular-formly-example",
    homepage: "http://angular-formly-example.surge.sh/",
    size: 106,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 28683594,
    node_id: "MDEwOlJlcG9zaXRvcnkyODY4MzU5NA==",
    name: "angular-formly-templates-lumx",
    full_name: "kentcdodds/angular-formly-templates-lumx",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/angular-formly-templates-lumx",
    description: "LumX Templates for Angular-Formly",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx",
    forks_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/angular-formly-templates-lumx/deployments",
    created_at: "2015-01-01T08:59:41Z",
    updated_at: "2014-12-31T07:57:58Z",
    pushed_at: "2015-01-01T09:02:11Z",
    git_url: "git://github.com/kentcdodds/angular-formly-templates-lumx.git",
    ssh_url: "git@github.com:kentcdodds/angular-formly-templates-lumx.git",
    clone_url:
      "https://github.com/kentcdodds/angular-formly-templates-lumx.git",
    svn_url: "https://github.com/kentcdodds/angular-formly-templates-lumx",
    homepage: "https://formly-lumx.herokuapp.com/",
    size: 117,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 26032877,
    node_id: "MDEwOlJlcG9zaXRvcnkyNjAzMjg3Nw==",
    name: "angular-spinner",
    full_name: "kentcdodds/angular-spinner",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/angular-spinner",
    description:
      "Angular directive to show an animated spinner (using spin.js)",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/angular-spinner",
    forks_url: "https://api.github.com/repos/kentcdodds/angular-spinner/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kentcdodds/angular-spinner/teams",
    hooks_url: "https://api.github.com/repos/kentcdodds/angular-spinner/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/angular-spinner/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/angular-spinner/deployments",
    created_at: "2014-10-31T20:56:53Z",
    updated_at: "2014-10-31T13:35:46Z",
    pushed_at: "2014-10-24T18:35:40Z",
    git_url: "git://github.com/kentcdodds/angular-spinner.git",
    ssh_url: "git@github.com:kentcdodds/angular-spinner.git",
    clone_url: "https://github.com/kentcdodds/angular-spinner.git",
    svn_url: "https://github.com/kentcdodds/angular-spinner",
    homepage: null,
    size: 718,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 23847608,
    node_id: "MDEwOlJlcG9zaXRvcnkyMzg0NzYwOA==",
    name: "angular-vs-repeat",
    full_name: "kentcdodds/angular-vs-repeat",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/angular-vs-repeat",
    description: "Virtual Scroll for AngularJS ngRepeat directive",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/angular-vs-repeat",
    forks_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/angular-vs-repeat/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/angular-vs-repeat/deployments",
    created_at: "2014-09-09T19:41:20Z",
    updated_at: "2014-09-09T13:12:51Z",
    pushed_at: "2014-09-09T20:52:11Z",
    git_url: "git://github.com/kentcdodds/angular-vs-repeat.git",
    ssh_url: "git@github.com:kentcdodds/angular-vs-repeat.git",
    clone_url: "https://github.com/kentcdodds/angular-vs-repeat.git",
    svn_url: "https://github.com/kentcdodds/angular-vs-repeat",
    homepage: "http://kamilkp.github.io/angular-vs-repeat/",
    size: 467,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 61661869,
    node_id: "MDEwOlJlcG9zaXRvcnk2MTY2MTg2OQ==",
    name: "angular-webpack-demo-project",
    full_name: "kentcdodds/angular-webpack-demo-project",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/angular-webpack-demo-project",
    description: "Angular Webpack Demo Project",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project",
    forks_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/angular-webpack-demo-project/deployments",
    created_at: "2016-06-21T19:39:28Z",
    updated_at: "2017-02-20T08:57:11Z",
    pushed_at: "2016-06-21T19:50:53Z",
    git_url: "git://github.com/kentcdodds/angular-webpack-demo-project.git",
    ssh_url: "git@github.com:kentcdodds/angular-webpack-demo-project.git",
    clone_url: "https://github.com/kentcdodds/angular-webpack-demo-project.git",
    svn_url: "https://github.com/kentcdodds/angular-webpack-demo-project",
    homepage: null,
    size: 9,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 1,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 31896366,
    node_id: "MDEwOlJlcG9zaXRvcnkzMTg5NjM2Ng==",
    name: "angular.js",
    full_name: "kentcdodds/angular.js",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/angular.js",
    description: "HTML enhanced for web apps",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/angular.js",
    forks_url: "https://api.github.com/repos/kentcdodds/angular.js/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/angular.js/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/angular.js/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/kentcdodds/angular.js/teams",
    hooks_url: "https://api.github.com/repos/kentcdodds/angular.js/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/angular.js/issues/events{/number}",
    events_url: "https://api.github.com/repos/kentcdodds/angular.js/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/angular.js/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/angular.js/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/angular.js/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/angular.js/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/angular.js/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/angular.js/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/angular.js/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/angular.js/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/angular.js/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/angular.js/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/angular.js/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/angular.js/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/angular.js/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/angular.js/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/angular.js/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/angular.js/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/angular.js/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/angular.js/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/angular.js/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/kentcdodds/angular.js/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/angular.js/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/angular.js/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/angular.js/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/angular.js/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/angular.js/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/angular.js/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/angular.js/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/angular.js/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/angular.js/deployments",
    created_at: "2015-03-09T12:10:06Z",
    updated_at: "2015-05-02T18:58:32Z",
    pushed_at: "2020-10-30T22:35:04Z",
    git_url: "git://github.com/kentcdodds/angular.js.git",
    ssh_url: "git@github.com:kentcdodds/angular.js.git",
    clone_url: "https://github.com/kentcdodds/angular.js.git",
    svn_url: "https://github.com/kentcdodds/angular.js",
    homepage: "http://angularjs.org",
    size: 67751,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 2,
    open_issues: 1,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 33953312,
    node_id: "MDEwOlJlcG9zaXRvcnkzMzk1MzMxMg==",
    name: "angular2-education",
    full_name: "kentcdodds/angular2-education",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/angular2-education",
    description:
      "A curated list of helpful material to get started with education on Angular 2",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/angular2-education",
    forks_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/branches{/branch}",
    tags_url: "https://api.github.com/repos/kentcdodds/angular2-education/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/angular2-education/deployments",
    created_at: "2015-04-14T19:47:43Z",
    updated_at: "2015-11-25T07:20:48Z",
    pushed_at: "2015-04-14T20:10:38Z",
    git_url: "git://github.com/kentcdodds/angular2-education.git",
    ssh_url: "git@github.com:kentcdodds/angular2-education.git",
    clone_url: "https://github.com/kentcdodds/angular2-education.git",
    svn_url: "https://github.com/kentcdodds/angular2-education",
    homepage: "",
    size: 94,
    stargazers_count: 2,
    watchers_count: 2,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 2,
    open_issues: 0,
    watchers: 2,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 36537783,
    node_id: "MDEwOlJlcG9zaXRvcnkzNjUzNzc4Mw==",
    name: "angular2-webpack-starter",
    full_name: "kentcdodds/angular2-webpack-starter",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/angular2-webpack-starter",
    description:
      "An Angular 2 Webpack Starter kit featuring Angular 2 (Router, Forms, Services), TypeScript, and Webpack by AngularClass",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/angular2-webpack-starter",
    forks_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/angular2-webpack-starter/deployments",
    created_at: "2015-05-30T01:27:34Z",
    updated_at: "2017-11-14T00:55:45Z",
    pushed_at: "2015-05-29T21:10:40Z",
    git_url: "git://github.com/kentcdodds/angular2-webpack-starter.git",
    ssh_url: "git@github.com:kentcdodds/angular2-webpack-starter.git",
    clone_url: "https://github.com/kentcdodds/angular2-webpack-starter.git",
    svn_url: "https://github.com/kentcdodds/angular2-webpack-starter",
    homepage: "",
    size: 692,
    stargazers_count: 1,
    watchers_count: 1,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 2,
    open_issues: 0,
    watchers: 1,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 46295992,
    node_id: "MDEwOlJlcG9zaXRvcnk0NjI5NTk5Mg==",
    name: "angularair.github.io",
    full_name: "kentcdodds/angularair.github.io",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/angularair.github.io",
    description: "angularair website",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/angularair.github.io",
    forks_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/angularair.github.io/deployments",
    created_at: "2015-11-16T19:09:33Z",
    updated_at: "2019-07-15T22:48:26Z",
    pushed_at: "2020-10-30T22:37:45Z",
    git_url: "git://github.com/kentcdodds/angularair.github.io.git",
    ssh_url: "git@github.com:kentcdodds/angularair.github.io.git",
    clone_url: "https://github.com/kentcdodds/angularair.github.io.git",
    svn_url: "https://github.com/kentcdodds/angularair.github.io",
    homepage: "http://angularair.com",
    size: 6131,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 1,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
  {
    id: 16003814,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjAwMzgxNA==",
    name: "angularjs-greensock-site",
    full_name: "kentcdodds/angularjs-greensock-site",
    private: false,
    owner: {
      login: "kentcdodds",
      id: 1500684,
      node_id: "MDQ6VXNlcjE1MDA2ODQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kentcdodds",
      html_url: "https://github.com/kentcdodds",
      followers_url: "https://api.github.com/users/kentcdodds/followers",
      following_url:
        "https://api.github.com/users/kentcdodds/following{/other_user}",
      gists_url: "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kentcdodds/subscriptions",
      organizations_url: "https://api.github.com/users/kentcdodds/orgs",
      repos_url: "https://api.github.com/users/kentcdodds/repos",
      events_url: "https://api.github.com/users/kentcdodds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kentcdodds/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/kentcdodds/angularjs-greensock-site",
    description:
      "Full page website using AngularJS ng-animate and Greensock GSAP.",
    fork: true,
    url: "https://api.github.com/repos/kentcdodds/angularjs-greensock-site",
    forks_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/forks",
    keys_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/teams",
    hooks_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/hooks",
    issue_events_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/events",
    assignees_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/tags",
    blobs_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/languages",
    stargazers_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/stargazers",
    contributors_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/contributors",
    subscribers_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/subscribers",
    subscription_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/subscription",
    commits_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/merges",
    archive_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/downloads",
    issues_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/labels{/name}",
    releases_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/kentcdodds/angularjs-greensock-site/deployments",
    created_at: "2014-01-17T15:50:04Z",
    updated_at: "2014-01-17T19:52:45Z",
    pushed_at: "2020-10-30T22:33:10Z",
    git_url: "git://github.com/kentcdodds/angularjs-greensock-site.git",
    ssh_url: "git@github.com:kentcdodds/angularjs-greensock-site.git",
    clone_url: "https://github.com/kentcdodds/angularjs-greensock-site.git",
    svn_url: "https://github.com/kentcdodds/angularjs-greensock-site",
    homepage: null,
    size: 3604,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 1,
    watchers: 0,
    default_branch: "master",
    permissions: {
      admin: false,
      maintain: false,
      push: false,
      triage: false,
      pull: true,
    },
  },
];

export const handlers = [
  rest.get("*/users/:username", (req, res, ctx) => {
    const { username } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        name: "Tanner Linsley",
        login: username,
        id: 5580297,
        node_id: "MDQ6VXNlcjU1ODAyOTc=",
        avatar_url: "https://avatars.githubusercontent.com/u/5580297?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/tannerlinsley",
        html_url: "https://github.com/tannerlinsley",
        followers_url: "https://api.github.com/users/tannerlinsley/followers",
        following_url:
          "https://api.github.com/users/tannerlinsley/following{/other_user}",
        gists_url: "https://api.github.com/users/tannerlinsley/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/tannerlinsley/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/tannerlinsley/subscriptions",
        organizations_url: "https://api.github.com/users/tannerlinsley/orgs",
        repos_url: "https://api.github.com/users/tannerlinsley/repos",
        events_url:
          "https://api.github.com/users/tannerlinsley/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/tannerlinsley/received_events",
        type: "User",
        site_admin: false,
        company: "@nozzle",
        blog: "https://tannerlinsley.com",
        location: "Utah",
        email: "email",
        hireable: null,
        bio: "🎉TypeScript + React ⚛️Open Source💡UI/UX 💼Co-Founder \r\n@NozzleIO\r\n 🛠Owner @TanStack - #ReactQuery #ReactTable #ReactLocation #ReactCharts",
        twitter_username: "tannerlinsley",
        public_repos: 112,
        public_gists: 66,
        followers: 8176,
        following: 13,
        created_at: "2013-09-30T21:34:41Z",
        updated_at: "2022-10-27T15:06:46Z",
      })
    );
  }),
  rest.get("*/users/:username/repos", (req, res, ctx) => {
    const { username } = req.params;
    const page = Number(req.url.searchParams.get("page")) - 1;
    const perPage = Number(req.url.searchParams.get("per_page"));

    if (username === "tannerlinsley") {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 19082646,
            node_id: "MDEwOlJlcG9zaXRvcnkxOTA4MjY0Ng==",
            name: "angular-dc",
            full_name: "tannerlinsley/angular-dc",
            private: false,
            html_url: "https://github.com/tannerlinsley/angular-dc",
            description: "AngularJS directives for dc.js",
            fork: true,
            url: "https://api.github.com/repos/tannerlinsley/angular-dc",
            forks_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/forks",
            keys_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/collaborators{/collaborator}",
            teams_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/teams",
            hooks_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/hooks",
            issue_events_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/issues/events{/number}",
            events_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/events",
            assignees_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/branches{/branch}",
            tags_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/tags",
            blobs_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/languages",
            stargazers_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/stargazers",
            contributors_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/contributors",
            subscribers_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/subscribers",
            subscription_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/subscription",
            commits_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/compare/{base}...{head}",
            merges_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/merges",
            archive_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/downloads",
            issues_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/labels{/name}",
            releases_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/tannerlinsley/angular-dc/deployments",
            created_at: "2014-04-23T19:26:34Z",
            updated_at: "2021-06-25T13:04:25Z",
            pushed_at: "2014-04-08T02:48:59Z",
            git_url: "git://github.com/tannerlinsley/angular-dc.git",
            ssh_url: "git@github.com:tannerlinsley/angular-dc.git",
            clone_url: "https://github.com/tannerlinsley/angular-dc.git",
            svn_url: "https://github.com/tannerlinsley/angular-dc",
            homepage: "http://tomneyland.github.io/angular-dc/",
            size: 443,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
          },
        ])
      );
    } else {
      return res(
        ctx.status(200),
        ctx.json(reposList.slice().splice(perPage * page, perPage))
      );
    }
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export function renderWithClient(ui: ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: "",
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: "en",
    domainLocales: [],
    isPreview: false,
    ...router,
  };
}
