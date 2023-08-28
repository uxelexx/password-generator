import GeneratorHeader from "./GeneratorHead";
import GeneratorLayout from "./GeneratorLayout";

export default function Generator() {
  return (
    <GeneratorLayout>
      <GeneratorHeader password="passwordlong%#" />
    </GeneratorLayout>
  );
}
