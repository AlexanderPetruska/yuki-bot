const Commands = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <div>
        <h1 className="text-center text-3xl font-bold">
          Commands List <span className="text-center text-primary">(9)</span>
        </h1>
        <p className="container mb-10 overflow-auto text-center text-sm font-extralight text-gray-400">
          Here you can find all the commands what you can use!
        </p>
      </div>
      <div className="flex h-14 w-full max-w-xs flex-row items-center justify-between rounded-full bg-card p-5 md:h-24 md:max-w-2xl md:flex-col md:items-start md:rounded-3xl">
        <div className="font-bold">
          <span className="text-gray-500">/</span> play
        </div>
        <div className="text-sm font-extralight text-gray-300">
          Queue a song
        </div>
      </div>
      <div className="flex h-14 w-full max-w-xs flex-row items-center justify-between rounded-full bg-card p-5 md:h-24 md:max-w-2xl md:flex-col md:items-start md:rounded-3xl">
        <div className="font-bold">
          <span className="text-gray-500">/</span> pause
        </div>
        <div className="text-sm font-extralight text-gray-300">
          Pause the playback
        </div>
      </div>
      <div className="flex h-14 w-full max-w-xs flex-row items-center justify-between rounded-full bg-card p-5 md:h-24 md:max-w-2xl md:flex-col md:items-start md:rounded-3xl">
        <div className="font-bold">
          <span className="text-gray-500">/</span> skip
        </div>
        <div className="text-sm font-extralight text-gray-300">
          Skip current playing track
        </div>
      </div>
      <div className="flex h-14 w-full max-w-xs flex-row items-center justify-between rounded-full bg-card p-5 md:h-24 md:max-w-2xl md:flex-col md:items-start md:rounded-3xl">
        <div className="font-bold">
          <span className="text-gray-500">/</span> stop
        </div>
        <div className="text-sm font-extralight text-gray-300">
          Stops the queue
        </div>
      </div>
      <div className="flex h-14 w-full max-w-xs flex-row items-center justify-between rounded-full bg-card p-5 md:h-24 md:max-w-2xl md:flex-col md:items-start md:rounded-3xl">
        <div className="font-bold">
          <span className="text-gray-500">/</span> repeat
        </div>
        <div className="text-sm font-extralight text-gray-300">
          Repeat the current queue
        </div>
      </div>
      <div className="flex h-14 w-full max-w-xs flex-row items-center justify-between rounded-full bg-card p-5 md:h-24 md:max-w-2xl md:flex-col md:items-start md:rounded-3xl">
        <div className="font-bold">
          <span className="text-gray-500">/</span> queue
        </div>
        <div className="text-sm font-extralight text-gray-300">
          Shows the current queue
        </div>
      </div>
      <div className="flex h-14 w-full max-w-xs flex-row items-center justify-between rounded-full bg-card p-5 md:h-24 md:max-w-2xl md:flex-col md:items-start md:rounded-3xl">
        <div className="font-bold">
          <span className="text-gray-500">/</span> volume
        </div>
        <div className="text-sm font-extralight text-gray-300">
          Adjust the volume
        </div>
      </div>
      <div className="flex h-14 w-full max-w-xs flex-row items-center justify-between rounded-full bg-card p-5 md:h-24 md:max-w-2xl md:flex-col md:items-start md:rounded-3xl">
        <div className="font-bold">
          <span className="text-gray-500">/</span> info
        </div>
        <div className="text-sm font-extralight text-gray-300">
          Stats about Yuki
        </div>
      </div>
      <div className="mb-10 flex h-14 w-full max-w-xs flex-row items-center justify-between rounded-full bg-card p-5 md:h-24 md:max-w-2xl md:flex-col md:items-start md:rounded-3xl">
        <div className="font-bold">
          <span className="text-gray-500">/</span> eval
        </div>
        <div className="text-sm font-extralight text-gray-300">
          Run some code
        </div>
      </div>
    </main>
  );
};

export default Commands;
