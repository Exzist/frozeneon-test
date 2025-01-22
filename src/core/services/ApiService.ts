import type { App } from "vue";

/**
 * @description Service to call HTTP requests via Fetch API
 */
class ApiService {
  /**
   * @description Base API URL
   */
  private static baseURL: string;

  /**
   * @description Initialize API service with Vue app instance
   * @param app Vue app instance
   */
  public static init(app: App<Element>) {
    ApiService.baseURL = process.env.VUE_APP_API_URL || "";
  }

  /**
   * @description Send HTTP GET request
   * @param resource API endpoint
   * @param params Query parameters as an object
   * @returns Promise<Response>
   */
  public static async query<T>(
    resource: string,
    params: Record<string, any> = {}
  ): Promise<T> {
    try {
      const queryString = new URLSearchParams(params).toString();
      const url = `${ApiService.baseURL}${resource}?${queryString}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error("API query error:", error);
      throw error;
    }
  }
}

export default ApiService;
