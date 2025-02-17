class Github {
    constructor() {
      this.client_id = 'Ov23liqX1341IdDETPAi';
      this.client_secret = '3b338b1d433b6f8810ad09d1d07b460156580fce';
      this.repos_count = 6;
      this.repos_sort = 'created: asc';
    }
    
    async getUser(user) {
      const profileResponse =
        await fetch(
          `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
  
        console.log(profileResponse)
  
      const repoResponse =
        await fetch(
          `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
  
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
  
      return {
        profile,
        repos
      }
    }
  }