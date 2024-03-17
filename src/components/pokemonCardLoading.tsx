import { Card, Spinner } from "flowbite-react";

const PokemonCardLoading = () => {
  return (
    <Card className="text-center">
        <Spinner />
    </Card>
  )
}

export default PokemonCardLoading