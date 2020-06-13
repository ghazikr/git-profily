import React, { useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import { sortDes } from "./utils";
import "./style.css";
import TopLanguagesChart from "./charts/TopLanguagesChart";
import MostStarredChart from "./charts/MosStarredChart";
import UserRepos from "./TopRepos";
import FollowersGraph from "./FollowersGraph";
const userInfoMock = {
  login: "ghazikr",
  id: 33207077,
  node_id: "MDQ6VXNlcjMzMjA3MDc3",
  avatar_url: "https://avatars1.githubusercontent.com/u/33207077?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/ghazikr",
  html_url: "https://github.com/ghazikr",
  followers_url: "https://api.github.com/users/ghazikr/followers",
  following_url: "https://api.github.com/users/ghazikr/following{/other_user}",
  gists_url: "https://api.github.com/users/ghazikr/gists{/gist_id}",
  starred_url: "https://api.github.com/users/ghazikr/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/ghazikr/subscriptions",
  organizations_url: "https://api.github.com/users/ghazikr/orgs",
  repos_url: "https://api.github.com/users/ghazikr/repos",
  events_url: "https://api.github.com/users/ghazikr/events{/privacy}",
  received_events_url: "https://api.github.com/users/ghazikr/received_events",
  type: "User",
  site_admin: false,
  name: "Ghazi Kadardar",
  company: "Shelmart",
  blog: "",
  location: "Chicago, Illinois",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 6,
  public_gists: 0,
  followers: 25,
  following: 0,
  created_at: "2017-10-29T22:20:38Z",
  updated_at: "2020-02-21T00:33:05Z",
};

const reposData = [
  {
    id: 110863028,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTA4NjMwMjg=",
    name: "MoustachBallGame",
    full_name: "ghazikr/MoustachBallGame",
    private: false,
    owner: {
      login: "ghazikr",
      id: 33207077,
      node_id: "MDQ6VXNlcjMzMjA3MDc3",
      avatar_url: "https://avatars1.githubusercontent.com/u/33207077?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ghazikr",
      html_url: "https://github.com/ghazikr",
      followers_url: "https://api.github.com/users/ghazikr/followers",
      following_url:
        "https://api.github.com/users/ghazikr/following{/other_user}",
      gists_url: "https://api.github.com/users/ghazikr/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ghazikr/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/ghazikr/subscriptions",
      organizations_url: "https://api.github.com/users/ghazikr/orgs",
      repos_url: "https://api.github.com/users/ghazikr/repos",
      events_url: "https://api.github.com/users/ghazikr/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ghazikr/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/ghazikr/MoustachBallGame",
    description: "Android Game",
    fork: false,
    url: "https://api.github.com/repos/ghazikr/MoustachBallGame",
    forks_url: "https://api.github.com/repos/ghazikr/MoustachBallGame/forks",
    keys_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/ghazikr/MoustachBallGame/teams",
    hooks_url: "https://api.github.com/repos/ghazikr/MoustachBallGame/hooks",
    issue_events_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/issues/events{/number}",
    events_url: "https://api.github.com/repos/ghazikr/MoustachBallGame/events",
    assignees_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/branches{/branch}",
    tags_url: "https://api.github.com/repos/ghazikr/MoustachBallGame/tags",
    blobs_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/languages",
    stargazers_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/stargazers",
    contributors_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/contributors",
    subscribers_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/subscribers",
    subscription_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/subscription",
    commits_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/ghazikr/MoustachBallGame/merges",
    archive_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/downloads",
    issues_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/labels{/name}",
    releases_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/ghazikr/MoustachBallGame/deployments",
    created_at: "2017-11-15T17:11:26Z",
    updated_at: "2017-11-15T17:32:11Z",
    pushed_at: "2017-11-15T17:54:16Z",
    git_url: "git://github.com/ghazikr/MoustachBallGame.git",
    ssh_url: "git@github.com:ghazikr/MoustachBallGame.git",
    clone_url: "https://github.com/ghazikr/MoustachBallGame.git",
    svn_url: "https://github.com/ghazikr/MoustachBallGame",
    homepage: "",
    size: 11674,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
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
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 108780482,
    node_id: "MDEwOlJlcG9zaXRvcnkxMDg3ODA0ODI=",
    name: "PetFinderApp",
    full_name: "ghazikr/PetFinderApp",
    private: false,
    owner: {
      login: "ghazikr",
      id: 33207077,
      node_id: "MDQ6VXNlcjMzMjA3MDc3",
      avatar_url: "https://avatars1.githubusercontent.com/u/33207077?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ghazikr",
      html_url: "https://github.com/ghazikr",
      followers_url: "https://api.github.com/users/ghazikr/followers",
      following_url:
        "https://api.github.com/users/ghazikr/following{/other_user}",
      gists_url: "https://api.github.com/users/ghazikr/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ghazikr/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/ghazikr/subscriptions",
      organizations_url: "https://api.github.com/users/ghazikr/orgs",
      repos_url: "https://api.github.com/users/ghazikr/repos",
      events_url: "https://api.github.com/users/ghazikr/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ghazikr/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/ghazikr/PetFinderApp",
    description:
      "An Xamarin forms app that helps users to find their lost dogs",
    fork: false,
    url: "https://api.github.com/repos/ghazikr/PetFinderApp",
    forks_url: "https://api.github.com/repos/ghazikr/PetFinderApp/forks",
    keys_url: "https://api.github.com/repos/ghazikr/PetFinderApp/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/ghazikr/PetFinderApp/teams",
    hooks_url: "https://api.github.com/repos/ghazikr/PetFinderApp/hooks",
    issue_events_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/issues/events{/number}",
    events_url: "https://api.github.com/repos/ghazikr/PetFinderApp/events",
    assignees_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/branches{/branch}",
    tags_url: "https://api.github.com/repos/ghazikr/PetFinderApp/tags",
    blobs_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/languages",
    stargazers_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/stargazers",
    contributors_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/contributors",
    subscribers_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/subscribers",
    subscription_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/subscription",
    commits_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/ghazikr/PetFinderApp/merges",
    archive_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/downloads",
    issues_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/labels{/name}",
    releases_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/ghazikr/PetFinderApp/deployments",
    created_at: "2017-10-29T23:37:04Z",
    updated_at: "2019-05-13T12:35:50Z",
    pushed_at: "2017-10-30T00:07:01Z",
    git_url: "git://github.com/ghazikr/PetFinderApp.git",
    ssh_url: "git@github.com:ghazikr/PetFinderApp.git",
    clone_url: "https://github.com/ghazikr/PetFinderApp.git",
    svn_url: "https://github.com/ghazikr/PetFinderApp",
    homepage: "",
    size: 2654,
    stargazers_count: 0,
    watchers_count: 0,
    language: "C#",
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
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 108780198,
    node_id: "MDEwOlJlcG9zaXRvcnkxMDg3ODAxOTg=",
    name: "RoomieApp",
    full_name: "ghazikr/RoomieApp",
    private: false,
    owner: {
      login: "ghazikr",
      id: 33207077,
      node_id: "MDQ6VXNlcjMzMjA3MDc3",
      avatar_url: "https://avatars1.githubusercontent.com/u/33207077?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ghazikr",
      html_url: "https://github.com/ghazikr",
      followers_url: "https://api.github.com/users/ghazikr/followers",
      following_url:
        "https://api.github.com/users/ghazikr/following{/other_user}",
      gists_url: "https://api.github.com/users/ghazikr/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ghazikr/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/ghazikr/subscriptions",
      organizations_url: "https://api.github.com/users/ghazikr/orgs",
      repos_url: "https://api.github.com/users/ghazikr/repos",
      events_url: "https://api.github.com/users/ghazikr/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ghazikr/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/ghazikr/RoomieApp",
    description:
      "An Xamarin forms app that connects flats owners to future possible roommates",
    fork: false,
    url: "https://api.github.com/repos/ghazikr/RoomieApp",
    forks_url: "https://api.github.com/repos/ghazikr/RoomieApp/forks",
    keys_url: "https://api.github.com/repos/ghazikr/RoomieApp/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/ghazikr/RoomieApp/teams",
    hooks_url: "https://api.github.com/repos/ghazikr/RoomieApp/hooks",
    issue_events_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/issues/events{/number}",
    events_url: "https://api.github.com/repos/ghazikr/RoomieApp/events",
    assignees_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/branches{/branch}",
    tags_url: "https://api.github.com/repos/ghazikr/RoomieApp/tags",
    blobs_url: "https://api.github.com/repos/ghazikr/RoomieApp/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/ghazikr/RoomieApp/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/statuses/{sha}",
    languages_url: "https://api.github.com/repos/ghazikr/RoomieApp/languages",
    stargazers_url: "https://api.github.com/repos/ghazikr/RoomieApp/stargazers",
    contributors_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/contributors",
    subscribers_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/subscribers",
    subscription_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/subscription",
    commits_url: "https://api.github.com/repos/ghazikr/RoomieApp/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/ghazikr/RoomieApp/merges",
    archive_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/ghazikr/RoomieApp/downloads",
    issues_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/issues{/number}",
    pulls_url: "https://api.github.com/repos/ghazikr/RoomieApp/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/ghazikr/RoomieApp/labels{/name}",
    releases_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/ghazikr/RoomieApp/deployments",
    created_at: "2017-10-29T23:31:46Z",
    updated_at: "2019-05-13T12:35:48Z",
    pushed_at: "2017-10-30T00:03:19Z",
    git_url: "git://github.com/ghazikr/RoomieApp.git",
    ssh_url: "git@github.com:ghazikr/RoomieApp.git",
    clone_url: "https://github.com/ghazikr/RoomieApp.git",
    svn_url: "https://github.com/ghazikr/RoomieApp",
    homepage: "",
    size: 263,
    stargazers_count: 0,
    watchers_count: 0,
    language: "C#",
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
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 114201857,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTQyMDE4NTc=",
    name: "SpyAppAdmin",
    full_name: "ghazikr/SpyAppAdmin",
    private: false,
    owner: {
      login: "ghazikr",
      id: 33207077,
      node_id: "MDQ6VXNlcjMzMjA3MDc3",
      avatar_url: "https://avatars1.githubusercontent.com/u/33207077?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ghazikr",
      html_url: "https://github.com/ghazikr",
      followers_url: "https://api.github.com/users/ghazikr/followers",
      following_url:
        "https://api.github.com/users/ghazikr/following{/other_user}",
      gists_url: "https://api.github.com/users/ghazikr/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ghazikr/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/ghazikr/subscriptions",
      organizations_url: "https://api.github.com/users/ghazikr/orgs",
      repos_url: "https://api.github.com/users/ghazikr/repos",
      events_url: "https://api.github.com/users/ghazikr/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ghazikr/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/ghazikr/SpyAppAdmin",
    description:
      "An android Spy app(Admin module) using FireBase, it is complementary to SpyAppClient",
    fork: false,
    url: "https://api.github.com/repos/ghazikr/SpyAppAdmin",
    forks_url: "https://api.github.com/repos/ghazikr/SpyAppAdmin/forks",
    keys_url: "https://api.github.com/repos/ghazikr/SpyAppAdmin/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/ghazikr/SpyAppAdmin/teams",
    hooks_url: "https://api.github.com/repos/ghazikr/SpyAppAdmin/hooks",
    issue_events_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/issues/events{/number}",
    events_url: "https://api.github.com/repos/ghazikr/SpyAppAdmin/events",
    assignees_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/branches{/branch}",
    tags_url: "https://api.github.com/repos/ghazikr/SpyAppAdmin/tags",
    blobs_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/statuses/{sha}",
    languages_url: "https://api.github.com/repos/ghazikr/SpyAppAdmin/languages",
    stargazers_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/stargazers",
    contributors_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/contributors",
    subscribers_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/subscribers",
    subscription_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/subscription",
    commits_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/ghazikr/SpyAppAdmin/merges",
    archive_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/ghazikr/SpyAppAdmin/downloads",
    issues_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/labels{/name}",
    releases_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/ghazikr/SpyAppAdmin/deployments",
    created_at: "2017-12-14T04:19:03Z",
    updated_at: "2020-05-28T05:04:02Z",
    pushed_at: "2017-12-14T04:24:00Z",
    git_url: "git://github.com/ghazikr/SpyAppAdmin.git",
    ssh_url: "git@github.com:ghazikr/SpyAppAdmin.git",
    clone_url: "https://github.com/ghazikr/SpyAppAdmin.git",
    svn_url: "https://github.com/ghazikr/SpyAppAdmin",
    homepage: null,
    size: 219,
    stargazers_count: 10,
    watchers_count: 10,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 15,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: null,
    forks: 15,
    open_issues: 2,
    watchers: 10,
    default_branch: "master",
  },
  {
    id: 113383895,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTMzODM4OTU=",
    name: "SpyAppClient",
    full_name: "ghazikr/SpyAppClient",
    private: false,
    owner: {
      login: "ghazikr",
      id: 33207077,
      node_id: "MDQ6VXNlcjMzMjA3MDc3",
      avatar_url: "https://avatars1.githubusercontent.com/u/33207077?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ghazikr",
      html_url: "https://github.com/ghazikr",
      followers_url: "https://api.github.com/users/ghazikr/followers",
      following_url:
        "https://api.github.com/users/ghazikr/following{/other_user}",
      gists_url: "https://api.github.com/users/ghazikr/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ghazikr/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/ghazikr/subscriptions",
      organizations_url: "https://api.github.com/users/ghazikr/orgs",
      repos_url: "https://api.github.com/users/ghazikr/repos",
      events_url: "https://api.github.com/users/ghazikr/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ghazikr/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/ghazikr/SpyAppClient",
    description: "An android Spy app using FireBase",
    fork: false,
    url: "https://api.github.com/repos/ghazikr/SpyAppClient",
    forks_url: "https://api.github.com/repos/ghazikr/SpyAppClient/forks",
    keys_url: "https://api.github.com/repos/ghazikr/SpyAppClient/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/ghazikr/SpyAppClient/teams",
    hooks_url: "https://api.github.com/repos/ghazikr/SpyAppClient/hooks",
    issue_events_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/issues/events{/number}",
    events_url: "https://api.github.com/repos/ghazikr/SpyAppClient/events",
    assignees_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/branches{/branch}",
    tags_url: "https://api.github.com/repos/ghazikr/SpyAppClient/tags",
    blobs_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/languages",
    stargazers_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/stargazers",
    contributors_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/contributors",
    subscribers_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/subscribers",
    subscription_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/subscription",
    commits_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/ghazikr/SpyAppClient/merges",
    archive_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/downloads",
    issues_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/labels{/name}",
    releases_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/ghazikr/SpyAppClient/deployments",
    created_at: "2017-12-07T00:48:18Z",
    updated_at: "2020-05-28T05:04:08Z",
    pushed_at: "2019-06-15T11:15:57Z",
    git_url: "git://github.com/ghazikr/SpyAppClient.git",
    ssh_url: "git@github.com:ghazikr/SpyAppClient.git",
    clone_url: "https://github.com/ghazikr/SpyAppClient.git",
    svn_url: "https://github.com/ghazikr/SpyAppClient",
    homepage: null,
    size: 1010,
    stargazers_count: 63,
    watchers_count: 63,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 68,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 7,
    license: null,
    forks: 68,
    open_issues: 7,
    watchers: 63,
    default_branch: "master",
  },
  {
    id: 113383661,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTMzODM2NjE=",
    name: "StorageFireBase",
    full_name: "ghazikr/StorageFireBase",
    private: false,
    owner: {
      login: "ghazikr",
      id: 33207077,
      node_id: "MDQ6VXNlcjMzMjA3MDc3",
      avatar_url: "https://avatars1.githubusercontent.com/u/33207077?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ghazikr",
      html_url: "https://github.com/ghazikr",
      followers_url: "https://api.github.com/users/ghazikr/followers",
      following_url:
        "https://api.github.com/users/ghazikr/following{/other_user}",
      gists_url: "https://api.github.com/users/ghazikr/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ghazikr/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/ghazikr/subscriptions",
      organizations_url: "https://api.github.com/users/ghazikr/orgs",
      repos_url: "https://api.github.com/users/ghazikr/repos",
      events_url: "https://api.github.com/users/ghazikr/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ghazikr/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/ghazikr/StorageFireBase",
    description:
      "Simple Android app of the main functionalities of FireBase and How to use it with Listview",
    fork: false,
    url: "https://api.github.com/repos/ghazikr/StorageFireBase",
    forks_url: "https://api.github.com/repos/ghazikr/StorageFireBase/forks",
    keys_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/ghazikr/StorageFireBase/teams",
    hooks_url: "https://api.github.com/repos/ghazikr/StorageFireBase/hooks",
    issue_events_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/issues/events{/number}",
    events_url: "https://api.github.com/repos/ghazikr/StorageFireBase/events",
    assignees_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/branches{/branch}",
    tags_url: "https://api.github.com/repos/ghazikr/StorageFireBase/tags",
    blobs_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/languages",
    stargazers_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/stargazers",
    contributors_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/contributors",
    subscribers_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/subscribers",
    subscription_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/subscription",
    commits_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/ghazikr/StorageFireBase/merges",
    archive_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/downloads",
    issues_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/labels{/name}",
    releases_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/ghazikr/StorageFireBase/deployments",
    created_at: "2017-12-07T00:44:17Z",
    updated_at: "2017-12-07T00:46:11Z",
    pushed_at: "2017-12-07T00:44:46Z",
    git_url: "git://github.com/ghazikr/StorageFireBase.git",
    ssh_url: "git@github.com:ghazikr/StorageFireBase.git",
    clone_url: "https://github.com/ghazikr/StorageFireBase.git",
    svn_url: "https://github.com/ghazikr/StorageFireBase",
    homepage: "",
    size: 127,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
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
    forks: 1,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
];

export default function UserProfile() {
  const [username, setUsername] = useState("ghazikr");
  const [userInfo, setUserInfo] = useState(userInfoMock);
  const [topLanguagesData, setTopLanguagesData] = useState([]);
  const [mostStarredReposData, setMostStarredReposData] = useState([]);
  const [repDataCards, setRepDataCards] = useState([]);
  const getUserInfo = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserInfo(data);
      })
      .catch((error) => {});
  };

  const getRepoData = () => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    // getUserInfo();
    // getRepoData();
    const languagesArray = Array.from(
      new Set(reposData.map((elem) => elem.language).filter((lang) => lang))
    );
    const userOrgiginalRepos = reposData.filter((repo) => repo.fork === false);
    console.log(userOrgiginalRepos);

    const languagesCountObj = languagesArray.map((language) => {
      const languageCountPerLang = userOrgiginalRepos.filter(
        (repo) => repo.language === language
      ).length;
      return { name: language, value: languageCountPerLang };
    });
    const languagesData = languagesCountObj.sort(sortDes).map((elem) => ({
      name: elem.name,
      value: elem.value,
    }));
    setTopLanguagesData(languagesData);

    const mostStarredRepos = userOrgiginalRepos
      .filter((repo) => repo.stargazers_count > 0)
      .map((repo) => ({ name: repo.full_name, value: repo.stargazers_count }))
      .sort(sortDes)
      .slice(0, 5);
    setMostStarredReposData(mostStarredRepos);
    console.log(userOrgiginalRepos);

    const repData = userOrgiginalRepos
      .map(({ name, stargazers_count, language, description }) => ({
        name,
        value: stargazers_count,
        language,
        description,
      }))
      .sort(sortDes)
      .slice(0, 8);
    setRepDataCards(repData);
  }, []);

  return (
    <>
      <div className="user-charts">
        <UserInfo data={userInfo} />
        <MostStarredChart data={mostStarredReposData} />
        <TopLanguagesChart data={topLanguagesData} />
      </div>
      <UserRepos data={repDataCards} />
      <FollowersGraph />
    </>
    // <div className="user-friends"></div>
  );
}
