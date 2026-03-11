export interface UnsplashPhoto {
  id: string;
  width: number,
  height: number,
  color: string,
  alt_description: string,
  urls: {
    raw:string ,
    full: string,
    regular: string,
    small: string,
    thumb: string
  },
  user: {
      name: string,
      portfolio_url: string,
      bio: string
  },
  likes: number,
}

export interface UnsplashSearch {
      id: string,
      width: number,
      height: number,
      color: string,
      user: {
        id: string,
        username: string,
        name: string,
        first_name: string,
        last_name: string,
        portfolio_url: string,
        profile_image: {
          small: string,
          medium: string,
          large: string
        },
        links: {
          self: string,
          html: string,
          photos: string,
          likes: string
        }
      },
      urls: {
        raw: string,
        full: string,
        regular: string,
        small: string,
        thumb: string
      }

}
