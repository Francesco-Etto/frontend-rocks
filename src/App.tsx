interface PokemonCard {
  id: number;
  image: string;
  name: string;
  types: string[];
}

const data: PokemonCard[] = [
  {
    id: 1,
    name: "Shrek",
    image: "https://lh3.googleusercontent.com/gg-dl/AA8i_VKW9nindFisTpELqSx2-MKcEeDIAxm9_KY68LAHOpAbSfEnp3VITsmxWOdDaWQfzuWELANaeC0ErxxpmZ68WVBl6TGwpsYObSTi7YFt1bjcdrBQg4WRMkbCKL6Nx9cRefjEhJGrLptzLyCEWTvZ_0pMF8-5Q8D8xfcxQoQehrf5zmeX_A=s1024",
    types: ["swamp", "melee"],
  },
  {
    id: 2,
    name: "Kichapu",
    image: "https://lh3.googleusercontent.com/gg-dl/AA8i_VI4UpqU9gtvttwXcpr5ByXRHXwjpEjXeARq-Z-MXGGt5Ho_mgn11R9DvVOGptclu7d7MUck_ofwgj8XvGYxuTclfwdj-IyZEdDCnLr9E9xTt89ckNUh-64ZHwS43Xo7wPHfjeP9laYdHlsUznUn4G-_O4qq89Br4nEpPbG3XFcCkqEsjQ=s1024",
    types: ["ice", "water"],
  },
  {
    id: 3,
    name: "Duolo",
    image: "https://lh3.googleusercontent.com/gg-dl/AA8i_VK1qxaIIxSuLeajSr2GZRwhH3xtHyUmt79MYXCjgZrDc8NtsRyTrIDuhrmG0GWXcxLZCAvG9UnmiodgVS36RMkJD6Z9ryaa_T1nHdVzFvASX4pIZzKozxdC46PywIwKqOpuuqvmkNI6-hX1SfSK0TosqfOG_oD6plv4ziW2iyoQaKMnow=s1024",
    types: ["air", "melee"],
  },
  {
    id: 4,
    name: "Draco",
    image: "https://lh3.googleusercontent.com/gg-dl/AA8i_VLEpYByZ8dqc0S5LSNo8mJ8DOr72EYFxRYCVl8F2ByOkcsS-0qP9pEIo1BhpB4VcZ-BPrJI87PSlZn2ESk8eQLYk2hMHh7vGyPy_4HhZejzXQF5q_MlMHIYA37ukRJ_ZxIWgxHCW6HP0vYjSxYnnjLSma-yjYwYplWDbAsl7A=s1024",
    types: ["fire", "air"],
  },
  {
    id: 5,
    name: "Ciukko",
    image: "https://lh3.googleusercontent.com/gg-dl/AA8i_VKZm9gpcswrr63JrNVp7QvAy159cJyxrdPyhXrNhIjJPmsofwwIUEyBteNxvsRV4p5PS3fkQ1tM-_dMuuXhd9lNjjzMIGT_F5bm85J4KTDP31llYNN_kZjZuNFqgEqc56gXJ1EIyVYy1T-igVc3YgE5VQHzKRLOUdgeVMd3n2TbBQ28YQ=s1024",
    types: ["swamp", "melee"],
  },
  {
    id: 6,
    name: "Poke",
    image: "https://lh3.googleusercontent.com/gg-dl/AA8i_VLawpvOpfCP8W8NHsDQu9V4q7kS9GizExY9iVY7Fxch6LmDyT_HtUJq-7z1gQqXWpEokD0FaM30TP0nLPxGuLKJ9bWkpk4vhmTL0xabeaiLSzYR3HCOMw2_U9AluRJWySmSZ4MphTL9ysRGMEq-oFa7nv2oajzH6XwkTtD1euvFVf95yQ=s1024",
    types: ["melee"],
  },
  {
    id: 7,
    name: "Lameon",
    image: "https://lh3.googleusercontent.com/gg-dl/AA8i_VI6RV0SuR6zbII1OgM4NPjyAWVBlWvl_UPWnqBHvoLS6kEwVdrYV-_TUg-iYKqr8ZCdG-X3RUsmthiY_qiu1lJ0KWElPVfrhgPd6DcOCaGsBX2nP2C21ymK63AUWBpUIK6tl8Rnw8xXr3dd6zHqn18Xubf7Rg3u2iNRaqNJCXiYYpVSOQ",
    types: ["melee"],
  },
  {
    id: 8,
    name: "Fenix",
    image: "https://lh3.googleusercontent.com/gg-dl/AA8i_VLt4UKg59WeuRbN7A39rYdmRnQOtfOJEHdQbTKZaRvCaOtS6w_sdBG0EZfMjeazvgWK43up9k8bQ80jnsEsm5D3azpLHkZLXz09CNHmgXU_NIJmTrWMMghSXhC5YMZq-rZAIOhIqLr1dDWq4rXY6RRlO11Wc2qTys5qiHkmTOxjfvlWvg",
    types: ["steel", "air"],
  },
  {
    id: 9,
    name: "Cactus",
    image: "https://lh3.googleusercontent.com/gg-dl/AA8i_VJK-B83IpErIZ5xAyF9PY9_i8g6wjaw66ujoj6Xf_BwBw8I-5OzIYz_ObIUt1rodNz1R3YyrPBfHsXxdf-RiiUm3UXQd32ND7MMY5bNEgBqKXvRpGyfpMlefpORX-V4GPLEIHh8IU0ogn1f9taJW-4KzTuk4gnYzUKTGOYuOsEr60zZyQ",
    types: ["melee"],
  },
];
 
const typeColor: { [key: string]: string } = {
  fire: "bg-red-600",
  water: "bg-blue-600",
  swamp: "bg-green-700",
  ice: "bg-blue-400",
  air: "bg-gray-500",
  melee: "bg-yellow-400",
  steel: "bg-gray-300"
};

function getTypeColor(type: string) {
  const color = typeColor[type];
  return color;
}

export const App = () => {
  return (
    <div className="flex flex-row grid grid grid-cols-5 border-4 border-indigo-500">
      {data.map((pokemon) => {
        return (
          <div key={pokemon.id} className="p-8, bg-white">
            <div className="p-4 text-blue-400 font-bold">{pokemon.id} - {pokemon.name}</div>
            <img src={pokemon.image} alt={pokemon.name} />
            
            <div className="flex flex-wrap p-4">
              {pokemon.types.map((type, index) => {
                return <div key={index} className={` p-4 ${getTypeColor(type)}` } outline-2 outline-offset-2 outline-blue-500>{type}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};


export const Detail = () => {
  return null
}