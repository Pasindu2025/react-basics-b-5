"client component";
import { getImageUrl } from "./utils";

//child component
function Avatar({ person, size, onClick }) {
  console.log("image URL:", getImageUrl(person));
  return (
    <div onClick={() => onClick(person.name)}>
      <img
        className="m-2.5 rounded-full"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </div>
  );
}
//parent component
export default function Profile() {
  return (
    <div className="flex flex-row gap-4 w-3xl items-end bg-amber-200 rounded">
      <Avatar
        person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
        onClick={(name) => alert(name)}
        size={100}
      />

      <Avatar
        
        person={{
          name: "Anuran kuma",
          imageId: "OKS67lh",
        }}
         onClick={(name) => alert(name)}
      />
      <Avatar
        size={50}
        person={{
          name: "Anuran kuma",
          imageId: "YfeOqp2",
        }}
         onClick={(name) => alert(name)}
      />
    </div>
  );
}
