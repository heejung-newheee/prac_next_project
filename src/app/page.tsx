import SignUpForm from '@/components/SignUpForm';
import ModeToggle from '@/components/common/ModeToggle';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ModeToggle />
            <SignUpForm />
        </main>
    );
}
