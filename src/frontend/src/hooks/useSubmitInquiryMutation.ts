import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface InquiryData {
  email: string;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryData) => {
      if (!actor) {
        throw new Error('Backend actor not initialized');
      }

      if (!data.email || !data.message) {
        throw new Error('Email and message are required');
      }

      await actor.submitInquiry(data.email, data.message);
    },
    onSuccess: () => {
      // Invalidate inquiries query if it exists
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
    onError: (error: Error) => {
      console.error('Failed to submit inquiry:', error);
    },
  });
}
