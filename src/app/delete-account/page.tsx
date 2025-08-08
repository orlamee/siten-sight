import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">
            Delete Your Account
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Follow the steps below to permanently delete your SiteNsight account.
            If you change your mind, you can always create a new account later.
          </p>
        </div>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-3">
                    Open your Profile page.
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Tap the profile icon (…) or menu to access your account settings.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/delete-account-1.png"
                alt="Step 1: Open your Profile page"
                width={300}
                height={600}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="border-t border-[#c3590e] w-16 mx-auto"></div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-3">
                    Select the Delete Account option.
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    You&apos;ll find the option under your scan history
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/delete-account-2.png"
                alt="Step 2: Select the Delete Account option"
                width={300}
                height={600}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="border-t border-[#c3590e] w-16 mx-auto"></div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-3">
                    Confirm deletion. Type Delete to continue.
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm">
                    You&apos;ll see a warning message. To proceed, click DELETE, which Permanently Deletes Account.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-600 dark:text-yellow-400 text-lg">⚠️</span>
                      <p className="text-yellow-800 dark:text-yellow-200 font-medium text-sm">
                        This action is permanent and cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/delete-account-3.png"
                alt="Step 3: Confirm deletion"
                width={300}
                height={600}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="border-t border-[#c3590e] w-16 mx-auto"></div>

          {/* Return Message */}
          <div className="text-center bg-gray-50 dark:bg-gray-900/50 rounded-lg p-5">
            <p className="text-muted-foreground text-sm">
              If you decide to return to SiteNsight later, simply re-download the app and create a new account.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#c3590e] text-white px-4 py-2 rounded-lg hover:bg-[#bd5f23] transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
