import { useCallback } from 'react';

export const useExportToCSV = <T>(fileName: string) => {
  const generateData = useCallback((data: T[]) => {
    const [headers, ...rows] = data;
    const csv = `${addHeaders(headers)}${addRestRows(rows)}`;

    const hiddenElement = document.createElement('a');
    hiddenElement.href = `data:text/csv;charset=utf-8, ${encodeURI(csv)}`;
    hiddenElement.target = '_blank';
    hiddenElement.download = `${fileName}.csv`;
    hiddenElement.click();
  }, []);

  const addHeaders = (data: T): string => `${Object.keys(data).join(', ')} \n`;

  const addRestRows = (data: T[]): string =>
    data.map((row: T) => Object.values(row).join(',')).join('\n');

  return {
    generateData,
  };
};
