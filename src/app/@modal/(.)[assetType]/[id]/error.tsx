'use client';

import Modal from "@/components/modal"

type ErrorProps = {
  error: Error & { digest?: string }
}

export default function Error({error}: ErrorProps) {
  <Modal>
    <h2>There doesn&apos;t appear to be an asset with that ID!</h2>
  </Modal>
}