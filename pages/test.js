import Head from 'next/head';

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Tailwind Grid Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-black p-8">
        <h1 className="text-4xl font-bold text-white mb-8">TAILWIND GRID TEST</h1>
        
        {/* 5 Column Grid - Should show 5 boxes in a row */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="bg-red-600 p-6 text-white text-center">
            <p className="font-bold">COL 1</p>
            <p className="text-sm">grid-cols-5</p>
          </div>
          <div className="bg-red-600 p-6 text-white text-center">
            <p className="font-bold">COL 2</p>
            <p className="text-sm">grid-cols-5</p>
          </div>
          <div className="bg-red-600 p-6 text-white text-center">
            <p className="font-bold">COL 3</p>
            <p className="text-sm">grid-cols-5</p>
          </div>
          <div className="bg-red-600 p-6 text-white text-center">
            <p className="font-bold">COL 4</p>
            <p className="text-sm">grid-cols-5</p>
          </div>
          <div className="bg-red-600 p-6 text-white text-center">
            <p className="font-bold">COL 5</p>
            <p className="text-sm">grid-cols-5</p>
          </div>
        </div>

        {/* 3 Column Grid - Should show 3 boxes in a row */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-800 p-6 text-white text-center">
            <p className="font-bold">LEFT</p>
            <p className="text-sm">grid-cols-3</p>
          </div>
          <div className="bg-gray-800 p-6 text-white text-center">
            <p className="font-bold">MIDDLE</p>
            <p className="text-sm">grid-cols-3</p>
          </div>
          <div className="bg-gray-800 p-6 text-white text-center">
            <p className="font-bold">RIGHT</p>
            <p className="text-sm">grid-cols-3</p>
          </div>
        </div>

        {/* 2 Column Grid - Should show 2 boxes in a row */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-blue-600 p-6 text-white text-center">
            <p className="font-bold">LEFT (50%)</p>
            <p className="text-sm">grid-cols-2</p>
          </div>
          <div className="bg-blue-600 p-6 text-white text-center">
            <p className="font-bold">RIGHT (50%)</p>
            <p className="text-sm">grid-cols-2</p>
          </div>
        </div>
      </div>
    </>
  );
}
