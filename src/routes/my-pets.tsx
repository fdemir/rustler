import { useAccount, useReadContract } from "wagmi";
import contract from "../config/contract";
import abi from "../config/abis/storage.json";

function MyPets() {
  const account = useAccount();
  const { data: list, isLoading } = useReadContract({
    functionName: "listMyPets",
    address: contract.storage,
    abi,
    account: account.address,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {list.map((pet: Pet) => (
        <div
          key={pet.name}
          className="flex items-center flex-col justify-center"
        >
          <span className="font-semibold py-4">{pet.name}</span>

          <div className="flex flex-row gap-2">
            <span>Level: {pet.stamina.toString()}</span>
            <span>Power: {pet.power.toString()}</span>
            <span>Hp: {pet.hp.toString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyPets;
