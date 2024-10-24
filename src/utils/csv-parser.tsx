import Papa from 'papaparse'

export type TCard = {
  year: number,
  title: string,
  conference_name: string,
  start_date: Date,
  end_date: Date,
  location: string
}

export const getCSV = async (filePath: string): Promise<TCard[]> => {
  const response = await fetch(filePath)
  const data = await response.text()

  return new Promise((resolve, reject) => {
    Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
      delimiter: ';',
      complete: (results: { data: TCard[] }) => {
        resolve(results.data);
      },
      error: (error: any) => {
        reject(error);
      },
    });
  });
}