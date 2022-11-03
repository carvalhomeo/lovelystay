import { Repo } from "@/model/repo";

export default class RepoBuilder {
  private readonly repo: Repo = {
    id: 19082646,
    node_id: "MDEwOlJlcG9zaXRvcnkxOTA4MjY0Ng==",
    name: "angular-dc",
    full_name: "tannerlinsley/angular-dc",
    private: false,
    html_url: "https://github.com/tannerlinsley/angular-dc",
    description: "AngularJS directives for dc.js",
    fork: true,
    url: "https://api.github.com/repos/tannerlinsley/angular-dc",
    forks_url: "https://api.github.com/repos/tannerlinsley/angular-dc/forks",
    keys_url:
      "https://api.github.com/repos/tannerlinsley/angular-dc/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/tannerlinsley/angular-dc/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/tannerlinsley/angular-dc/teams",
    hooks_url: "https://api.github.com/repos/tannerlinsley/angular-dc/hooks",
    issue_events_url:
      "https://api.github.com/repos/tannerlinsley/angular-dc/issues/events{/number}",
    events_url: "https://api.github.com/repos/tannerlinsley/angular-dc/events",
    assignees_url:
      "https://api.github.com/repos/tannerlinsley/angular-dc/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/tannerlinsley/angular-dc/branches{/branch}",
    tags_url: "https://api.github.com/repos/tannerlinsley/angular-dc/tags",
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
    merges_url: "https://api.github.com/repos/tannerlinsley/angular-dc/merges",
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
  };

  public static aRepo(): RepoBuilder {
    return new RepoBuilder();
  }

  public withName(name: string): RepoBuilder {
    this.repo.name = name;
    return this;
  }

  public withDescription(description: string): RepoBuilder {
    this.repo.description = description;
    return this;
  }

  public build(): Repo {
    return this.repo;
  }
}
