export interface IPageProps<T> {
  params: Promise<T>
}

export type TPageSlugProp = IPageProps<{ slug: string }>
export type TPagePublicIdProp = IPageProps<{ publicId: string }>
export type TPageIdProp = IPageProps<{ id: string }>
