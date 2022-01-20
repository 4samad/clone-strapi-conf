/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

type Props = { color: string; height?: number | string };

export default function PlatformLogo({ height = 20 }: Props) {
  return (
    <svg height={height} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 119 31">
      <defs />
      <path
        fill="#8E75FF"
        fillRule="evenodd"
        d="M25.979 4.727H8.751v8.638h8.477c.302 0 .547.245.547.547v8.36h8.751V5.275a.547.547 0 00-.547-.548z"
        clipRule="evenodd"
      />
      <path
        fill="#8E75FF"
        fillRule="evenodd"
        d="M8.75 4.727v8.638H.668a.274.274 0 01-.192-.469L8.75 4.727zM18.241 30.45a.274.274 0 01-.466-.195v-7.983h8.751l-8.285 8.177z"
        clipRule="evenodd"
        opacity=".405"
      />
      <path
        fill="#8E75FF"
        d="M8.75 13.365h8.752c.15 0 .273.122.273.273v8.634H9.298a.547.547 0 01-.547-.547v-8.36z"
        opacity=".405"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M114.771 4.182c.489.484 1.066.725 1.732.725.687 0 1.275-.241 1.764-.725.489-.484.733-1.054.733-1.713 0-.658-.244-1.234-.733-1.728A2.393 2.393 0 00116.503 0c-.666 0-1.243.247-1.732.74-.489.495-.733 1.07-.733 1.73 0 .658.244 1.228.733 1.712zm-53.06 6.312c0 .05-.042.092-.093.092h-3.435v6.42c0 .535.136.926.406 1.173s.666.385 1.186.416c.476.029 1.056.027 1.741-.005l.097-.005a.092.092 0 01.097.092v3.431a.092.092 0 01-.082.092l-.063.007c-2.69.283-4.593.02-5.707-.788-1.134-.823-1.7-2.294-1.7-4.413v-6.42h-2.624a.092.092 0 01-.092-.092V6.851c0-.05.041-.092.092-.092h2.623V4.212c0-.074.044-.14.111-.17l3.786-1.647a.092.092 0 01.13.084v4.28h3.434c.05 0 .092.041.092.092v3.643zm7.3-1.08c.374-.988.993-1.729 1.856-2.223a5.65 5.65 0 012.794-.74c.051 0 .093.041.093.093v4.185a.15.15 0 01-.165.149c-1.161-.104-2.204.149-3.128.758-.967.637-1.45 1.697-1.45 3.179v7.284a.092.092 0 01-.093.092h-3.842a.092.092 0 01-.092-.092V6.85c0-.05.041-.092.092-.092h3.842c.05 0 .092.041.092.092v2.562zm19.036-2.655a.092.092 0 00-.093.092v1.73c-1.206-1.503-2.902-2.254-5.087-2.254-2.08 0-3.865.787-5.352 2.361-1.488 1.574-2.232 3.503-2.232 5.787s.744 4.213 2.232 5.787c1.487 1.574 3.272 2.361 5.352 2.361 2.185 0 3.88-.751 5.087-2.253v1.729c0 .05.042.092.093.092h3.841c.051 0 .093-.041.093-.092V6.85a.092.092 0 00-.093-.092h-3.841zm-7.52 10.864c.811.803 1.84 1.204 3.09 1.204 1.248 0 2.283-.407 3.105-1.22.822-.812 1.232-1.856 1.232-3.132s-.41-2.32-1.232-3.133c-.822-.812-1.857-1.219-3.106-1.219-1.248 0-2.278.407-3.09 1.22-.81.812-1.217 1.856-1.217 3.132s.406 2.325 1.218 3.148zm29.35-8.935c-1.488-1.574-3.283-2.361-5.384-2.361-2.185 0-3.87.751-5.056 2.253V6.851a.092.092 0 00-.092-.092h-3.842a.092.092 0 00-.092.092v21.42c0 .051.041.093.092.093h3.842c.05 0 .092-.042.092-.093V20.37c1.186 1.502 2.871 2.253 5.056 2.253 2.101 0 3.896-.787 5.384-2.361 1.487-1.574 2.231-3.503 2.231-5.787s-.744-4.213-2.231-5.787zm-9.223 8.935c.812.803 1.841 1.204 3.09 1.204 1.248 0 2.283-.407 3.105-1.22.822-.812 1.233-1.856 1.233-3.132s-.411-2.32-1.233-3.133c-.822-.812-1.857-1.219-3.105-1.219-1.249 0-2.278.407-3.09 1.22-.811.812-1.217 1.856-1.217 3.132s.406 2.325 1.217 3.148zm13.944 4.568a.092.092 0 01-.092-.092V6.85c0-.05.041-.092.092-.092h3.842c.051 0 .092.041.092.092V22.1a.092.092 0 01-.092.092h-3.842zM42.813 12.145c-.552-.257-.827-.592-.827-1.003 0-.391.171-.7.515-.926.343-.226.775-.34 1.295-.34.997 0 1.75.385 2.26 1.154a.133.133 0 00.163.05l3.398-1.487a.092.092 0 00.042-.13 8.523 8.523 0 00-.12-.194c-.581-.905-1.334-1.58-2.279-2.093-1.04-.566-2.195-.849-3.464-.849-1.686 0-3.095.437-4.23 1.312-1.133.874-1.7 2.073-1.7 3.595 0 1.009.276 1.847.827 2.516a4.867 4.867 0 002.013 1.466c.79.308 1.581.566 2.372.771.79.206 1.462.438 2.013.695.551.257.827.591.827 1.003 0 .885-.718 1.327-2.153 1.327-1.367 0-2.314-.5-2.841-1.498a.185.185 0 00-.238-.087l-3.388 1.485a.092.092 0 00-.046.124l.038.077c1.184 2.34 3.342 3.51 6.475 3.51 1.789 0 3.282-.427 4.478-1.28 1.197-.855 1.795-2.074 1.795-3.658 0-1.05-.276-1.924-.827-2.624a4.6 4.6 0 00-2.013-1.496 20.991 20.991 0 00-2.372-.741c-.791-.196-1.462-.422-2.013-.68z"
        clipRule="evenodd"
      />
    </svg>
  );
}