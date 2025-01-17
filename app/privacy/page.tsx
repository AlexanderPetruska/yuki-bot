const Privacy = () => {
  return (
    <main className="justify-top container flex h-full max-w-6xl flex-1 flex-col items-center gap-5 bg-background">
      <div>
        <h1 className="mb-1 text-center text-3xl font-bold">
          Privacy and Policy
        </h1>
        <p className="mb-10 max-w-80 overflow-auto text-center text-sm font-light text-gray-300 md:max-w-full">
          Effective Date: 4th day of July, 2024
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="items-left flex w-full flex-col md:align-middle">
          <h2 className="text-left  font-black text-primary md:max-w-2xl">
            YUKI COLLECTS THE FOLLOWING INFORMATION DURING ITS USE:
          </h2>
          <div className="ml-6">
            <ul className="list-disc pl-4 font-light">
              <li>Server IDs</li>
              <li>User IDs</li>
              <li>Channel IDs</li>
              <li>Message IDs</li>
              <li>Custom settings for a server (like logging)</li>
              <li>Message content (if logging is enabled on the server)</li>
            </ul>
          </div>
        </div>
        <div className="items-left flex w-full flex-col md:align-middle">
          <h2 className="font-black text-primary md:max-w-2xl">
            WHAT WE COLLECT AND WHAT WE DO:
          </h2>
          <div className="ml-6 ">
            <p className=" text-left font-light">
              Yuki stores the content of messages temporarily into memory when
              message logging is enabled to provide the differences between
              edited messages and show the content of deleted messages. This
              also includes the Message ID, Channel ID, and Server ID of any
              edited and deleted message. For instance, if a message is deleted,
              Yuki will run through and log the contents to the logging channel
              (where enabled), and will immediately remove the message
              information (Message ID, Message content, etc.) from memory.
            </p>
          </div>
        </div>
        <div className="items-left flex w-full flex-col md:align-middle">
          <h2 className="font-black text-primary md:max-w-2xl">
            HOW WE USE THE DATA COLLECTED:
          </h2>
          <div className="ml-6">
            <p className=" text-left font-light">
              We use the data collected to provide, operate, and maintain Yuki.{" "}
              <span className="font-bold">
                WE DO NOT SHARE ANY DATA WITH THIRD PARTIES. WE DO NOT SELL YOUR
                DATA.
              </span>
            </p>
          </div>
        </div>
        <div className="items-left flex w-full flex-col md:align-middle">
          <h2 className="font-black text-primary md:max-w-2xl">
            HOW TO REMOVE YOUR DATA:
          </h2>
          <div className="ml-6">
            <p className=" text-lef font-light">
              When Yuki is removed from a server, any in-memory messages will be
              immediately wiped and server settings will be automatically
              removed within 72 hours (in case of an accidental remove).
              <br /> <br />
              You may also contact the maintainer at inyix (on discord) or by
              email at inyixqwq@gmail.com.
            </p>
          </div>
        </div>
        <div className="items-left mb-10 flex w-full flex-col md:align-middle">
          <h2 className="font-black text-primary md:max-w-2xl">
            WHERE THE DATA IS PROCESSED
          </h2>
          <div className="ml-6">
            <p className=" text-left font-light">
              The data collected will be processed in United States of America.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
