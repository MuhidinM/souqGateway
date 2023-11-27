export const getAll = async (): Promise<Client[]> => {
  try {
    const res = await fetch(`/api/clients`, {
      cache: "no-cache",
      next: { tags: ["clients"] },
    });
    return res.json();
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};
