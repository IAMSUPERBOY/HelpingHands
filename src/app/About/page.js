export default function Page() {
  return (
    <div className="flex ">
      <div class=" w-full mx-16 my-16 bg-cneter max-w-md align-middle bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Kenz
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    kenz@gmail.com
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  UI/UX design
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center ">
                <div class="flex-shrink-0">
                  {/*   <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"> */}
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Sivanandan
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    siva@gmail.com
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  FrontEnd
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  {/*  <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"> */}
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Suraj Krishna
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    surajkrishna004@gmail.com
                  </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  Backend
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
