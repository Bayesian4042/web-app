import http from 'k6/http'
import { sleep } from 'k6';

export default function () {
  const res = http.post('http://localhost:3000/transcode')
  sleep(1)
}