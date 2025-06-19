import { Button } from '~/components/Button';

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-24">
      <h1 className="text-32 font-semibold leading-38 text-blue">Welcome to Next.js!</h1>
      <Button className="w-160 !text-blue">Click me</Button>
    </div>
  );
}
