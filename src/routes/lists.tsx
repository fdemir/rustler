import { useAccount, useReadContract } from "wagmi";
import contract from "../config/contract";
import abi from "../config/abis/storage.json";

function List() {
  const account = useAccount();
  const { data: list, isLoading } = useReadContract({
    functionName: "listAllPets",
    address: contract.storage,
    abi,
    account: account.address,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stamina</th>
            <th>Power</th>
            <th>HP</th>
          </tr>
        </thead>
        <tbody>
          {list.map((pet: Pet) => (
            <tr key={pet.name}>
              <td>{pet.name}</td>
              <td>{pet.stamina.toString()}</td>
              <td>{pet.power.toString()}</td>
              <td>{pet.hp.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
