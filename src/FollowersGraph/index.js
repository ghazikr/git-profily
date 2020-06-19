import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const data = [
  {
    login: "likai3615560",
    id: 3921044,
    node_id: "MDQ6VXNlcjM5MjEwNDQ=",
    avatar_url: "https://avatars2.githubusercontent.com/u/3921044?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/likai3615560",
    html_url: "https://github.com/likai3615560",
    followers_url: "https://api.github.com/users/likai3615560/followers",
    following_url:
      "https://api.github.com/users/likai3615560/following{/other_user}",
    gists_url: "https://api.github.com/users/likai3615560/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/likai3615560/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/likai3615560/subscriptions",
    organizations_url: "https://api.github.com/users/likai3615560/orgs",
    repos_url: "https://api.github.com/users/likai3615560/repos",
    events_url: "https://api.github.com/users/likai3615560/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/likai3615560/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "erichamisi",
    id: 5172515,
    node_id: "MDQ6VXNlcjUxNzI1MTU=",
    avatar_url: "https://avatars1.githubusercontent.com/u/5172515?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/erichamisi",
    html_url: "https://github.com/erichamisi",
    followers_url: "https://api.github.com/users/erichamisi/followers",
    following_url:
      "https://api.github.com/users/erichamisi/following{/other_user}",
    gists_url: "https://api.github.com/users/erichamisi/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/erichamisi/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/erichamisi/subscriptions",
    organizations_url: "https://api.github.com/users/erichamisi/orgs",
    repos_url: "https://api.github.com/users/erichamisi/repos",
    events_url: "https://api.github.com/users/erichamisi/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/erichamisi/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "MohamedSA2016",
    id: 27889863,
    node_id: "MDQ6VXNlcjI3ODg5ODYz",
    avatar_url: "https://avatars1.githubusercontent.com/u/27889863?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/MohamedSA2016",
    html_url: "https://github.com/MohamedSA2016",
    followers_url: "https://api.github.com/users/MohamedSA2016/followers",
    following_url:
      "https://api.github.com/users/MohamedSA2016/following{/other_user}",
    gists_url: "https://api.github.com/users/MohamedSA2016/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/MohamedSA2016/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/MohamedSA2016/subscriptions",
    organizations_url: "https://api.github.com/users/MohamedSA2016/orgs",
    repos_url: "https://api.github.com/users/MohamedSA2016/repos",
    events_url: "https://api.github.com/users/MohamedSA2016/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/MohamedSA2016/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "drozd600",
    id: 27812298,
    node_id: "MDQ6VXNlcjI3ODEyMjk4",
    avatar_url: "https://avatars2.githubusercontent.com/u/27812298?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/drozd600",
    html_url: "https://github.com/drozd600",
    followers_url: "https://api.github.com/users/drozd600/followers",
    following_url:
      "https://api.github.com/users/drozd600/following{/other_user}",
    gists_url: "https://api.github.com/users/drozd600/gists{/gist_id}",
    starred_url: "https://api.github.com/users/drozd600/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/drozd600/subscriptions",
    organizations_url: "https://api.github.com/users/drozd600/orgs",
    repos_url: "https://api.github.com/users/drozd600/repos",
    events_url: "https://api.github.com/users/drozd600/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/drozd600/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "kevinkoech",
    id: 28725758,
    node_id: "MDQ6VXNlcjI4NzI1NzU4",
    avatar_url: "https://avatars1.githubusercontent.com/u/28725758?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/kevinkoech",
    html_url: "https://github.com/kevinkoech",
    followers_url: "https://api.github.com/users/kevinkoech/followers",
    following_url:
      "https://api.github.com/users/kevinkoech/following{/other_user}",
    gists_url: "https://api.github.com/users/kevinkoech/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/kevinkoech/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/kevinkoech/subscriptions",
    organizations_url: "https://api.github.com/users/kevinkoech/orgs",
    repos_url: "https://api.github.com/users/kevinkoech/repos",
    events_url: "https://api.github.com/users/kevinkoech/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/kevinkoech/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "sivazozo",
    id: 28874855,
    node_id: "MDQ6VXNlcjI4ODc0ODU1",
    avatar_url: "https://avatars1.githubusercontent.com/u/28874855?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/sivazozo",
    html_url: "https://github.com/sivazozo",
    followers_url: "https://api.github.com/users/sivazozo/followers",
    following_url:
      "https://api.github.com/users/sivazozo/following{/other_user}",
    gists_url: "https://api.github.com/users/sivazozo/gists{/gist_id}",
    starred_url: "https://api.github.com/users/sivazozo/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/sivazozo/subscriptions",
    organizations_url: "https://api.github.com/users/sivazozo/orgs",
    repos_url: "https://api.github.com/users/sivazozo/repos",
    events_url: "https://api.github.com/users/sivazozo/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/sivazozo/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "wab1986",
    id: 34269550,
    node_id: "MDQ6VXNlcjM0MjY5NTUw",
    avatar_url: "https://avatars2.githubusercontent.com/u/34269550?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/wab1986",
    html_url: "https://github.com/wab1986",
    followers_url: "https://api.github.com/users/wab1986/followers",
    following_url:
      "https://api.github.com/users/wab1986/following{/other_user}",
    gists_url: "https://api.github.com/users/wab1986/gists{/gist_id}",
    starred_url: "https://api.github.com/users/wab1986/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/wab1986/subscriptions",
    organizations_url: "https://api.github.com/users/wab1986/orgs",
    repos_url: "https://api.github.com/users/wab1986/repos",
    events_url: "https://api.github.com/users/wab1986/events{/privacy}",
    received_events_url: "https://api.github.com/users/wab1986/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "DeveloperTele",
    id: 5257275,
    node_id: "MDQ6VXNlcjUyNTcyNzU=",
    avatar_url: "https://avatars3.githubusercontent.com/u/5257275?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/DeveloperTele",
    html_url: "https://github.com/DeveloperTele",
    followers_url: "https://api.github.com/users/DeveloperTele/followers",
    following_url:
      "https://api.github.com/users/DeveloperTele/following{/other_user}",
    gists_url: "https://api.github.com/users/DeveloperTele/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/DeveloperTele/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/DeveloperTele/subscriptions",
    organizations_url: "https://api.github.com/users/DeveloperTele/orgs",
    repos_url: "https://api.github.com/users/DeveloperTele/repos",
    events_url: "https://api.github.com/users/DeveloperTele/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/DeveloperTele/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "vamsip140",
    id: 35889428,
    node_id: "MDQ6VXNlcjM1ODg5NDI4",
    avatar_url: "https://avatars0.githubusercontent.com/u/35889428?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/vamsip140",
    html_url: "https://github.com/vamsip140",
    followers_url: "https://api.github.com/users/vamsip140/followers",
    following_url:
      "https://api.github.com/users/vamsip140/following{/other_user}",
    gists_url: "https://api.github.com/users/vamsip140/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/vamsip140/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/vamsip140/subscriptions",
    organizations_url: "https://api.github.com/users/vamsip140/orgs",
    repos_url: "https://api.github.com/users/vamsip140/repos",
    events_url: "https://api.github.com/users/vamsip140/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/vamsip140/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "ankit0183",
    id: 29034134,
    node_id: "MDQ6VXNlcjI5MDM0MTM0",
    avatar_url: "https://avatars3.githubusercontent.com/u/29034134?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ankit0183",
    html_url: "https://github.com/ankit0183",
    followers_url: "https://api.github.com/users/ankit0183/followers",
    following_url:
      "https://api.github.com/users/ankit0183/following{/other_user}",
    gists_url: "https://api.github.com/users/ankit0183/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/ankit0183/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ankit0183/subscriptions",
    organizations_url: "https://api.github.com/users/ankit0183/orgs",
    repos_url: "https://api.github.com/users/ankit0183/repos",
    events_url: "https://api.github.com/users/ankit0183/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/ankit0183/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "Georger0ot",
    id: 37770642,
    node_id: "MDQ6VXNlcjM3NzcwNjQy",
    avatar_url: "https://avatars3.githubusercontent.com/u/37770642?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Georger0ot",
    html_url: "https://github.com/Georger0ot",
    followers_url: "https://api.github.com/users/Georger0ot/followers",
    following_url:
      "https://api.github.com/users/Georger0ot/following{/other_user}",
    gists_url: "https://api.github.com/users/Georger0ot/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/Georger0ot/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/Georger0ot/subscriptions",
    organizations_url: "https://api.github.com/users/Georger0ot/orgs",
    repos_url: "https://api.github.com/users/Georger0ot/repos",
    events_url: "https://api.github.com/users/Georger0ot/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/Georger0ot/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "heshosboos",
    id: 30959227,
    node_id: "MDQ6VXNlcjMwOTU5MjI3",
    avatar_url: "https://avatars0.githubusercontent.com/u/30959227?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/heshosboos",
    html_url: "https://github.com/heshosboos",
    followers_url: "https://api.github.com/users/heshosboos/followers",
    following_url:
      "https://api.github.com/users/heshosboos/following{/other_user}",
    gists_url: "https://api.github.com/users/heshosboos/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/heshosboos/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/heshosboos/subscriptions",
    organizations_url: "https://api.github.com/users/heshosboos/orgs",
    repos_url: "https://api.github.com/users/heshosboos/repos",
    events_url: "https://api.github.com/users/heshosboos/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/heshosboos/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "l4mp14",
    id: 20783183,
    node_id: "MDQ6VXNlcjIwNzgzMTgz",
    avatar_url: "https://avatars0.githubusercontent.com/u/20783183?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/l4mp14",
    html_url: "https://github.com/l4mp14",
    followers_url: "https://api.github.com/users/l4mp14/followers",
    following_url: "https://api.github.com/users/l4mp14/following{/other_user}",
    gists_url: "https://api.github.com/users/l4mp14/gists{/gist_id}",
    starred_url: "https://api.github.com/users/l4mp14/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/l4mp14/subscriptions",
    organizations_url: "https://api.github.com/users/l4mp14/orgs",
    repos_url: "https://api.github.com/users/l4mp14/repos",
    events_url: "https://api.github.com/users/l4mp14/events{/privacy}",
    received_events_url: "https://api.github.com/users/l4mp14/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "yashraj0077",
    id: 30123955,
    node_id: "MDQ6VXNlcjMwMTIzOTU1",
    avatar_url: "https://avatars3.githubusercontent.com/u/30123955?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/yashraj0077",
    html_url: "https://github.com/yashraj0077",
    followers_url: "https://api.github.com/users/yashraj0077/followers",
    following_url:
      "https://api.github.com/users/yashraj0077/following{/other_user}",
    gists_url: "https://api.github.com/users/yashraj0077/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/yashraj0077/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/yashraj0077/subscriptions",
    organizations_url: "https://api.github.com/users/yashraj0077/orgs",
    repos_url: "https://api.github.com/users/yashraj0077/repos",
    events_url: "https://api.github.com/users/yashraj0077/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/yashraj0077/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "cooldreamers123",
    id: 20647794,
    node_id: "MDQ6VXNlcjIwNjQ3Nzk0",
    avatar_url: "https://avatars3.githubusercontent.com/u/20647794?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/cooldreamers123",
    html_url: "https://github.com/cooldreamers123",
    followers_url: "https://api.github.com/users/cooldreamers123/followers",
    following_url:
      "https://api.github.com/users/cooldreamers123/following{/other_user}",
    gists_url: "https://api.github.com/users/cooldreamers123/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/cooldreamers123/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/cooldreamers123/subscriptions",
    organizations_url: "https://api.github.com/users/cooldreamers123/orgs",
    repos_url: "https://api.github.com/users/cooldreamers123/repos",
    events_url: "https://api.github.com/users/cooldreamers123/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/cooldreamers123/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "skriptkid1234",
    id: 51788056,
    node_id: "MDQ6VXNlcjUxNzg4MDU2",
    avatar_url: "https://avatars3.githubusercontent.com/u/51788056?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/skriptkid1234",
    html_url: "https://github.com/skriptkid1234",
    followers_url: "https://api.github.com/users/skriptkid1234/followers",
    following_url:
      "https://api.github.com/users/skriptkid1234/following{/other_user}",
    gists_url: "https://api.github.com/users/skriptkid1234/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/skriptkid1234/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/skriptkid1234/subscriptions",
    organizations_url: "https://api.github.com/users/skriptkid1234/orgs",
    repos_url: "https://api.github.com/users/skriptkid1234/repos",
    events_url: "https://api.github.com/users/skriptkid1234/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/skriptkid1234/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "Charliecres",
    id: 37834626,
    node_id: "MDQ6VXNlcjM3ODM0NjI2",
    avatar_url: "https://avatars1.githubusercontent.com/u/37834626?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Charliecres",
    html_url: "https://github.com/Charliecres",
    followers_url: "https://api.github.com/users/Charliecres/followers",
    following_url:
      "https://api.github.com/users/Charliecres/following{/other_user}",
    gists_url: "https://api.github.com/users/Charliecres/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/Charliecres/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/Charliecres/subscriptions",
    organizations_url: "https://api.github.com/users/Charliecres/orgs",
    repos_url: "https://api.github.com/users/Charliecres/repos",
    events_url: "https://api.github.com/users/Charliecres/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/Charliecres/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "sahujaunpuri",
    id: 22550065,
    node_id: "MDQ6VXNlcjIyNTUwMDY1",
    avatar_url: "https://avatars0.githubusercontent.com/u/22550065?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/sahujaunpuri",
    html_url: "https://github.com/sahujaunpuri",
    followers_url: "https://api.github.com/users/sahujaunpuri/followers",
    following_url:
      "https://api.github.com/users/sahujaunpuri/following{/other_user}",
    gists_url: "https://api.github.com/users/sahujaunpuri/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/sahujaunpuri/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/sahujaunpuri/subscriptions",
    organizations_url: "https://api.github.com/users/sahujaunpuri/orgs",
    repos_url: "https://api.github.com/users/sahujaunpuri/repos",
    events_url: "https://api.github.com/users/sahujaunpuri/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/sahujaunpuri/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "ishtiaqali141",
    id: 34022863,
    node_id: "MDQ6VXNlcjM0MDIyODYz",
    avatar_url: "https://avatars3.githubusercontent.com/u/34022863?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ishtiaqali141",
    html_url: "https://github.com/ishtiaqali141",
    followers_url: "https://api.github.com/users/ishtiaqali141/followers",
    following_url:
      "https://api.github.com/users/ishtiaqali141/following{/other_user}",
    gists_url: "https://api.github.com/users/ishtiaqali141/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/ishtiaqali141/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/ishtiaqali141/subscriptions",
    organizations_url: "https://api.github.com/users/ishtiaqali141/orgs",
    repos_url: "https://api.github.com/users/ishtiaqali141/repos",
    events_url: "https://api.github.com/users/ishtiaqali141/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/ishtiaqali141/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "dafy1978",
    id: 16280450,
    node_id: "MDQ6VXNlcjE2MjgwNDUw",
    avatar_url: "https://avatars1.githubusercontent.com/u/16280450?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/dafy1978",
    html_url: "https://github.com/dafy1978",
    followers_url: "https://api.github.com/users/dafy1978/followers",
    following_url:
      "https://api.github.com/users/dafy1978/following{/other_user}",
    gists_url: "https://api.github.com/users/dafy1978/gists{/gist_id}",
    starred_url: "https://api.github.com/users/dafy1978/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/dafy1978/subscriptions",
    organizations_url: "https://api.github.com/users/dafy1978/orgs",
    repos_url: "https://api.github.com/users/dafy1978/repos",
    events_url: "https://api.github.com/users/dafy1978/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/dafy1978/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "zianoedar",
    id: 58205041,
    node_id: "MDQ6VXNlcjU4MjA1MDQx",
    avatar_url: "https://avatars2.githubusercontent.com/u/58205041?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/zianoedar",
    html_url: "https://github.com/zianoedar",
    followers_url: "https://api.github.com/users/zianoedar/followers",
    following_url:
      "https://api.github.com/users/zianoedar/following{/other_user}",
    gists_url: "https://api.github.com/users/zianoedar/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/zianoedar/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/zianoedar/subscriptions",
    organizations_url: "https://api.github.com/users/zianoedar/orgs",
    repos_url: "https://api.github.com/users/zianoedar/repos",
    events_url: "https://api.github.com/users/zianoedar/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/zianoedar/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "hakanonymos",
    id: 30985149,
    node_id: "MDQ6VXNlcjMwOTg1MTQ5",
    avatar_url: "https://avatars1.githubusercontent.com/u/30985149?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/hakanonymos",
    html_url: "https://github.com/hakanonymos",
    followers_url: "https://api.github.com/users/hakanonymos/followers",
    following_url:
      "https://api.github.com/users/hakanonymos/following{/other_user}",
    gists_url: "https://api.github.com/users/hakanonymos/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/hakanonymos/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/hakanonymos/subscriptions",
    organizations_url: "https://api.github.com/users/hakanonymos/orgs",
    repos_url: "https://api.github.com/users/hakanonymos/repos",
    events_url: "https://api.github.com/users/hakanonymos/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/hakanonymos/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "azeekhan1",
    id: 29881594,
    node_id: "MDQ6VXNlcjI5ODgxNTk0",
    avatar_url: "https://avatars3.githubusercontent.com/u/29881594?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/azeekhan1",
    html_url: "https://github.com/azeekhan1",
    followers_url: "https://api.github.com/users/azeekhan1/followers",
    following_url:
      "https://api.github.com/users/azeekhan1/following{/other_user}",
    gists_url: "https://api.github.com/users/azeekhan1/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/azeekhan1/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/azeekhan1/subscriptions",
    organizations_url: "https://api.github.com/users/azeekhan1/orgs",
    repos_url: "https://api.github.com/users/azeekhan1/repos",
    events_url: "https://api.github.com/users/azeekhan1/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/azeekhan1/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "IRONGEEKER",
    id: 22526398,
    node_id: "MDQ6VXNlcjIyNTI2Mzk4",
    avatar_url: "https://avatars3.githubusercontent.com/u/22526398?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/IRONGEEKER",
    html_url: "https://github.com/IRONGEEKER",
    followers_url: "https://api.github.com/users/IRONGEEKER/followers",
    following_url:
      "https://api.github.com/users/IRONGEEKER/following{/other_user}",
    gists_url: "https://api.github.com/users/IRONGEEKER/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/IRONGEEKER/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/IRONGEEKER/subscriptions",
    organizations_url: "https://api.github.com/users/IRONGEEKER/orgs",
    repos_url: "https://api.github.com/users/IRONGEEKER/repos",
    events_url: "https://api.github.com/users/IRONGEEKER/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/IRONGEEKER/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "jopioska",
    id: 63532578,
    node_id: "MDQ6VXNlcjYzNTMyNTc4",
    avatar_url: "https://avatars3.githubusercontent.com/u/63532578?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/jopioska",
    html_url: "https://github.com/jopioska",
    followers_url: "https://api.github.com/users/jopioska/followers",
    following_url:
      "https://api.github.com/users/jopioska/following{/other_user}",
    gists_url: "https://api.github.com/users/jopioska/gists{/gist_id}",
    starred_url: "https://api.github.com/users/jopioska/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/jopioska/subscriptions",
    organizations_url: "https://api.github.com/users/jopioska/orgs",
    repos_url: "https://api.github.com/users/jopioska/repos",
    events_url: "https://api.github.com/users/jopioska/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/jopioska/received_events",
    type: "User",
    site_admin: false,
  },
];

export default function FollowersGraph() {
  const username = "Napolean";
  const HEIGHT = 700;
  const BASIC_R = 40;

  const ref = useRef(null);
  useEffect(() => {
    const drag = (simulation) => {
      function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    };
    const followers = data.map(({ login, avatar_url, repos_url }) => ({
      login,
      avatar_url,
      repos_url,
    }));

    const links = data.map((follower) => ({
      source: username,
      target: follower.login,
      value: 1,
    }));
    const nodes = [
      ...data.map((follower) => ({
        id: follower.login,
        avatarUrl: follower.avatar_url,
      })),
      { id: username, avatarUrl: "" },
    ];

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "collide",
        d3.forceCollide().radius(function (d) {
          return BASIC_R + 5;
        })
      )
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(function (link) {
            return 150;
          })
      )
      .force("charge", d3.forceManyBody());
    // .force("center", d3.forceCenter(1100 / 2, 600 / 2));

    const svg = d3.select(ref.current);

    const link = svg
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", (d) => {
        return d.value;
      });
    const node = svg
      .append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("image")
      .data(nodes)
      .join("image")
      .attr("xlink:href", (d) => {
        return d.avatarUrl;
      })
      .attr("x", -8)
      .attr("y", -8)
      .attr("width", (d) => (d.id === username ? 60 : BASIC_R))
      .attr("height", (d) => (d.id === username ? 60 : BASIC_R))
      //   .attr("r", (d) => (d.id === username ? 60 : BASIC_R))
      //   .attr("fill", (d) => (d.id === username ? "red" : "blue"))
      .call(drag(simulation));

    node.append("title").text((d) => d.id);

    var text = svg.append("g").selectAll("g").data(nodes).enter().append("g");
    text
      .append("text")
      .attr("x", -15)
      .attr("y", BASIC_R + 5)
      .text(function (d) {
        return d.id;
      });

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);
      node.attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
      //   node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      text.attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
    });
    resize();
    d3.select(window).on("resize", resize);
    function resize() {
      const width = document.getElementById("container").offsetWidth;
      const height = document.getElementById("container").offsetHeight;
      svg.attr("width", width);
      simulation.force("center", d3.forceCenter(width / 2, HEIGHT / 2));
      // simulation.size([width, height]).resume();
    }
  }, []);

  return (
    <section
      id="followers"
      className="section-card"
      style={{ height: `${HEIGHT}px` }}
    >
      <h1>Top Followers</h1>
      <svg ref={ref} height="100%" width="100%"></svg>
    </section>
  );
}
