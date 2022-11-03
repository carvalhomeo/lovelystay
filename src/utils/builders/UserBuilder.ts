import { User } from "@/model/user";

export default class UserBuilder {
  private readonly user: User = {
    name: "Tanner Linsley",
    login: "tannerlinsley",
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
    events_url: "https://api.github.com/users/tannerlinsley/events{/privacy}",
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
  };

  public static aUser(): UserBuilder {
    return new UserBuilder();
  }

  public withName(name: string): UserBuilder {
    this.user.name = name;
    return this;
  }

  public withLogin(login: string): UserBuilder {
    this.user.login = login;
    return this;
  }

  public withEmail(email: string): UserBuilder {
    this.user.email = email;
    return this;
  }

  public withFollowers(followers: number | string): UserBuilder {
    this.user.followers = followers;
    return this;
  }

  public withFollowing(following: number | string): UserBuilder {
    this.user.following = following;
    return this;
  }

  public build(): User {
    return this.user;
  }
}
