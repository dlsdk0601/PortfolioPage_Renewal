function _blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const { result } = reader;
      if (typeof result === "string") {
        resolve(result);
      } else {
        reject(new Error("readAsDataURL 결과값이 string이 아님"));
      }
    };
    reader.readAsDataURL(blob);
  });
}

export async function fileToBase64(file: File): Promise<string> {
  const dataUri = await _blobToBase64(file);
  const base64 = dataUri.split(",")[1];
  return base64;
}
