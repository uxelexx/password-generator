import GeneratorLayout from "./GeneratorLayout";
import Password from "./Password";

export default function Generator() {
  return (
    <GeneratorLayout>
      <Password password="passwordlong%#" />
    </GeneratorLayout>
  );
}
