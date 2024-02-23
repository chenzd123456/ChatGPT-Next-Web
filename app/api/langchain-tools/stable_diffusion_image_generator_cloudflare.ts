import { Tool } from "@langchain/core/tools";

export class StableDiffusionCloudflareWrapper extends Tool {
  name = "stable_diffusion_image_generator_on_cloudflare";

  constructor() {
    super();
  }

  /** @ignore */
  async _call(prompt: string) {
    let url = process.env.STABLE_DIFFUSION_CLOUDFLARE_API_URL;
    const filePath = `${url}/${prompt}`;
    return filePath;
  }

  description = `stable diffusion is an ai art generation model similar to dalle-2.
    input requires english.
    output will be the image link url.
    use markdown to display images. like: ![img](/api/file/xxx.png)`;
}
