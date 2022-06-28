import { FC } from "react";
import { useRouter } from "next/router";
import { Card, Grid } from "@nextui-org/react";

interface Props {
  pokemonId: number;
}

const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onClick={onFavoriteClicked}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={"100%"}
          height={100}
        />
      </Card>
    </Grid>
  );
};

export default FavoriteCardPokemon;
