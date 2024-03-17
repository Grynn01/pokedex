export interface Pokemon {
    id: number
    name: string
    sprites: PokemonSprites
    types: PokemonType[]
    weight: number
    height: number
    abilities: PokemonAbilities[]
    stats: Stats[]
}

export interface PokemonAbilities {
    ability: PokemonName
}

export interface PokemonType{
    type: PokemonName
}

export interface PokemonName {
    name: string
    url: string
}

export interface PokemonSprites {
    other: Arts
}

export interface Arts{
    'official-artwork': OfficialArtWork
}

export interface OfficialArtWork {
    front_default: string
}

export interface PokemonSpecie {
    flavor_text_entries: DescriptionText[]
    genera: Category[]
}

export interface DescriptionText {
    flavor_text: string
    language: PokemonName
}

export interface Stats{
    base_stat: number
    effort: number
    stat: PokemonName
}

export interface Category{
    genus: string
    language: PokemonName
}